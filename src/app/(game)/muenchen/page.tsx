import data from './data/features.json'
import routes from './data/routes.json'
import 'mapbox-gl/dist/mapbox-gl.css'
import 'react-circular-progressbar/dist/styles.css'
import { DataFeatureCollection, RoutesFeatureCollection } from '@/lib/types'
import config from './config'
import GamePage from '@/components/GamePage'
import { Provider } from '@/lib/configContext'
import { Inter } from 'next/font/google'

const font = Inter({
  subsets: ['latin'],
  display: 'swap',
})

const fc = {
  ...data,
  features: data.features.filter((f) => !!config.LINES[f.properties.line]),
} as DataFeatureCollection

const routesFc = routes as RoutesFeatureCollection

export const metadata = config.METADATA

export default function Hamburg() {
  return (
    <Provider value={config}>
      <main className={font.className}>
        <GamePage fc={fc} routes={routesFc} />
      </main>
    </Provider>
  )
}
