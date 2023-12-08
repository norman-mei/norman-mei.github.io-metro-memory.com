import CityStats from '@/components/CityStats'
import { cities } from '@/lib/citiesConfig'

export const revalidate = 86400 // 24 hours

const hostedCities = cities.map((city) => ({
  slug:
    city.link === 'https://memory.pour.paris' // only city hosted elsewhere
      ? 'paris'
      : city.link.replace('/', ''),
  name: city.name,
}))

const StatsPage = async () => {
  return (
    <div className="bg-gray-50 py-12">
      <h1 className="mb-6 text-center text-3xl font-bold">
        Stats of most found stations in each city
      </h1>
      <p className="mb-12 text-center text-gray-800">
        Spoilers ahead. If you want to play the game, avoid looking at this page
        and hovering the map!
      </p>
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 md:px-0">
        {hostedCities.map(({ slug, name }) => (
          <CityStats key={slug} name={name} slug={slug} />
        ))}
      </div>
    </div>
  )
}

export default StatsPage
