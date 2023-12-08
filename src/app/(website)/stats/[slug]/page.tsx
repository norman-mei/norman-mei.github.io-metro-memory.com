import CityStats from '@/components/CityStats'
import { cities } from '@/lib/citiesConfig'
import slugify from '@/lib/slugify'
import { redirect, useParams } from 'next/navigation'

export const revalidate = 86400 // 24 hours
export const dynamic = 'force-static'

const hostedCities = cities
  .filter((city) => !city.hideInStats)
  .map((city) => ({
    slug: slugify(city),
    name: city.name,
  }))

const StatsPage = async ({ params }: { params: { slug: string } }) => {
  const { slug } = params
  const city = cities.find((city) => slugify(city) === slug)

  if (!city) {
    return redirect('/404')
  }

  return (
    <>
      <h1 className="mb-6 text-center text-3xl font-bold">
        Stats of most found stations - {city.name}
      </h1>
      <p className="mb-12 text-center text-gray-800 dark:text-gray-300">
        Spoilers ahead. If you want to play the game, avoid looking at this page
        and hovering the map!
      </p>
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 md:px-0">
        <CityStats key={slug} name={city.name} slug={slug} />
      </div>
    </>
  )
}

export default StatsPage
