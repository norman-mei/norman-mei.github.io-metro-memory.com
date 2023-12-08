import _, { filter, groupBy, reverse, sortBy, uniqBy, zip } from 'lodash'
import StatsGraph from './StatsGraph'
import { kv } from '@vercel/kv'
import { promises as fs } from 'fs'

const CityStats = async ({ name, slug }: { name: string; slug: string }) => {
  const features = await import(`@/app/(game)/${slug}/data/features.json`)

  let cityStats: [string, number][] = []

  try {
    // load from file cache
    cityStats = JSON.parse(
      await fs.readFile(`public/stats/${slug}.json`, { encoding: 'utf-8' }),
    )
    console.log('loaded from file cache')
  } catch (error) {
    console.log(`loading ${slug} from kv store`)
    // scan all keys
    const [_cursor, keys] = await kv.scan(0, {
      match: `${slug}-*`,
      count: 5000,
    })

    const counts = zip(
      keys,
      await Promise.all(keys.map(async (key) => (await kv.get(key)) as number)),
    ) as [string, number][]

    const data = sortBy(
      filter(counts, ([key]) => key!.startsWith(`${slug}`)),
      ([_, v]) => -v!,
    ) as [string, number][]

    await fs.writeFile(
      `public/stats/${slug}.json`,
      JSON.stringify(data, null, 2),
    )

    cityStats = data
  }

  const mapFeature = ([key, value]: [string, number]) => {
    const id = +key.replace(`${slug}-`, '')
    const feature = features.features.find((f: any) => f.id === id)

    if (!feature) {
      return null
    }

    return {
      id,
      name: feature.properties.name,
      value,
      line: feature.properties.line,
      geometry: feature.geometry,
    }
  }

  const reduceLines = (items: any[], index: number, array: any[]): any => {
    return items.reduce(
      (acc, item): any => ({
        name: item.name,
        value: item.value,
        geometry: item.geometry,
        lines: [...acc.lines, item.line],
        id: item.id,
        percentile: index / array.length,
      }),
      {
        lines: [],
        value: 0,
        name: '',
        geometry: null,
        id: 0,
        percentile: 0,
      },
    )
  }

  const values = _.chain(cityStats)
    .map(mapFeature)
    .filter(Boolean)
    .groupBy('name')
    .values()
    .map(reduceLines)
    .value() as any

  if (values[0].value < 500) {
    return null
  }

  return (
    <div className="max-w-5xl rounded border bg-white p-2">
      <h1 className="text-xl font-medium">{name}</h1>
      <StatsGraph values={values} slug={slug} />
    </div>
  )
}

export default CityStats
