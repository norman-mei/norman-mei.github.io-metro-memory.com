import data from './data/features.json'
import 'mapbox-gl/dist/mapbox-gl.css'
import 'react-circular-progressbar/dist/styles.css'
import { DataFeatureCollection } from '@/lib/types'
import config from './config'
import GamePage from '@/components/GamePage'
import { Provider } from '@/lib/configContext'
import localFont from 'next/font/local'

const font = localFont({
  src: [
    {
      path: './fonts/sans.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: './fonts/sans-bold.ttf',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-sans',
})

const fc = {
  ...data,
  features: data.features.filter((f) => !!config.LINES[f.properties.line]),
} as DataFeatureCollection

export const metadata = config.METADATA

export default function Berlin() {
  return (
    <Provider value={config}>
      <main className={font.className}>
        <GamePage fc={fc} />
      </main>
    </Provider>
  )
}
