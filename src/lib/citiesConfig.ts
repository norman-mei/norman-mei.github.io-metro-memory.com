import paris from '@/images/photos/paris.png'
import london from '@/images/photos/london.png'
import berlin from '@/images/photos/berlin.png'
import ny from '@/images/photos/ny.png'
import wien from '@/images/photos/wien.png'
import dc from '@/images/photos/dc.png'
import madrid from '@/images/photos/madrid.png'
import seoul from '@/images/photos/seoul.png'
import barcelona from '@/images/photos/barcelona.png'
import mexicoCity from '@/images/photos/mexico-city.png'
import istanbul from '@/images/photos/mexico-city.png'

import { StaticImageData } from 'next/image'

export interface ICity {
  name: string
  image: StaticImageData
  link: string
  disabled?: boolean
  hideInStats?: boolean
}

export const cities: ICity[] = [
  {
    name: 'Paris',
    image: paris,
    link: 'https://memory.pour.paris',
  },
  {
    name: 'London',
    image: london,
    link: '/london',
  },
  {
    name: 'Berlin',
    image: berlin,
    link: '/berlin',
  },
  {
    name: 'Vienna',
    image: wien,
    link: '/wien',
  },
  {
    name: 'Washington DC',
    image: dc,
    link: '/dc',
  },
  {
    name: 'Madrid',
    image: madrid,
    link: '/madrid',
  },
  {
    name: 'Barcelona',
    image: barcelona,
    link: '/barcelona',
  },
  {
    name: 'Seoul',
    image: seoul,
    link: '/seoul',
  },
  {
    name: 'Mexico City',
    image: mexicoCity,
    link: '/mexico-city',
  },
  {
    name: 'New York Subway',
    image: ny,
    link: '/ny',
  },
  {
    name: 'Istanbul',
    image: istanbul,
    link: '/istanbul',
    hideInStats: true,
  },
]
