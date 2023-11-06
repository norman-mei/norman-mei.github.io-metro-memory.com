import data from './data/features.json'
import 'mapbox-gl/dist/mapbox-gl.css'
import 'react-circular-progressbar/dist/styles.css'
import { DataFeatureCollection } from '@/lib/types'
import config from './config'
import GamePage from '@/components/GamePage'
import { Provider } from '@/lib/configContext'
import { Rubik } from 'next/font/google'

const font = Rubik({
  weight: 'variable',
  subsets: ['latin'],
  variable: '--font-sans',
})

const fc = {
  ...data,
  features: data.features.filter((f) => !!config.LINES[f.properties.line]),
} as DataFeatureCollection

export const metadata = config.METADATA

export default function Wien() {
  return (
    <Provider value={config}>
      <main className={font.className}>
        <GamePage fc={fc} />
      </main>
    </Provider>
  )
}
