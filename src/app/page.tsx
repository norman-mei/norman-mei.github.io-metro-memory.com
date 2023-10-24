import Image, { StaticImageData } from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import {
  GitHubIcon,
  InstagramIcon,
  LinkedInIcon,
  TwitterIcon,
} from '@/components/SocialIcons'

import paris from '@/images/photos/paris.png'
import london from '@/images/photos/london.png'
import berlin from '@/images/photos/berlin.png'
import ny from '@/images/photos/ny.png'
import Tweets from '@/components/Tweets'

interface ICity {
  name: string
  image: StaticImageData
  link: string
  disabled?: boolean
}

const cities: ICity[] = [
  {
    name: 'Paris Metro',
    image: paris,
    link: 'https://memory.pour.paris',
  },
  {
    name: 'London Tube',
    image: london,
    link: 'https://london.metro-memory.com',
  },
  {
    name: 'Berlin S- & U-Bahn',
    image: berlin,
    link: '#',
  },
  {
    name: 'New York Subway (soon)',
    image: ny,
    link: '#',
    disabled: true,
  },
]

function SocialLink({
  icon: Icon,
  ...props
}: React.ComponentPropsWithoutRef<typeof Link> & {
  icon: React.ComponentType<{ className?: string }>
}) {
  return (
    <Link className="group -m-1 p-1" {...props}>
      <Icon className="h-6 w-6 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300" />
    </Link>
  )
}

const City = ({ city, className }: { city: ICity; className?: string }) => {
  return (
    <a
      href={city.link}
      key={city.link}
      className="group mt-4"
      aria-disabled={city.disabled}
    >
      <h1 className="mb-4 text-2xl font-bold group-hover:underline">
        {city.name}
      </h1>
      <div
        className={clsx(
          'relative aspect-square w-60 flex-none overflow-hidden rounded-xl bg-zinc-100 shadow transition-all  dark:bg-zinc-800 sm:w-72 sm:rounded-2xl',
          {
            'group-hover:shadow-lg group-hover:shadow-yellow-300/50':
              !city.disabled,
            grayscale: city.disabled,
          },
          className,
        )}
      >
        <Image
          draggable={false}
          src={city.image}
          alt=""
          className="absolute inset-0 h-full w-full object-cover"
        />
      </div>
    </a>
  )
}

export default async function Home() {
  return (
    <>
      <Container className="mt-9">
        <div className="max-w-2xl">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
            Metro Memory{' '}
          </h1>
          <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
            Challenge yourself to remember the stations of your city&apos;s
            metro.
            <br />
            How well do you know your city&apos;s transit system?
          </p>
          <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
            The goal is simple. Type as many of the stations as you can
            remember, and see them pop up on the map. No time limit.
          </p>
          <div className="mx-auto my-16 mt-16 grid max-w-2xl grid-cols-1 gap-8 sm:mt-20 md:grid-cols-2 2xl:grid-cols-3">
            {cities.map((city, i) => (
              <City
                city={city}
                key={city.link}
                className={i % 2 ? 'rotate-2' : '-rotate-2'}
              />
            ))}
          </div>

          <p className="mt-6">
            If you want the game to be available in your city, send me a message
            on Twitter{' '}
            <a href="https://twitter.com/_benjamintd">@_benjamintd</a>.
          </p>

          <p className="mt-6"></p>
          <div className="mt-6 flex gap-6">
            <SocialLink
              href="https://twitter.com/_benjamintd"
              aria-label="Follow on Twitter"
              icon={TwitterIcon}
            />
            <SocialLink
              href="https://instagram.com/_benjamintd"
              aria-label="Follow on Instagram"
              icon={InstagramIcon}
            />
            <SocialLink
              href="https://github.com/benjamintd"
              aria-label="Follow on GitHub"
              icon={GitHubIcon}
            />
            <SocialLink
              href="https://linkedin.com/in/benjamintd"
              aria-label="Follow on LinkedIn"
              icon={LinkedInIcon}
            />
          </div>
        </div>
        <p className="mt-6">
          Inspired by the game Chris Arvin created for{' '}
          <a href="https://carvin.github.io/sf-street-names/">San Francisco</a>.
        </p>

        <h2 className="mt-12 text-4xl font-bold">
          What people say about Metro Memory
        </h2>
        <Tweets />
      </Container>
    </>
  )
}
