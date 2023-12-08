import CityStats from '@/components/CityStats'
import { cities } from '@/lib/citiesConfig'

export const revalidate = 3600

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
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 md:px-0">
        {hostedCities.map(({ slug, name }) => (
          <CityStats key={slug} name={name} slug={slug} />
        ))}
      </div>
    </div>
  )
}

export default StatsPage
