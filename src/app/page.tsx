import Image, { type ImageProps } from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import {
  GitHubIcon,
  InstagramIcon,
  LinkedInIcon,
  TwitterIcon,
} from '@/components/SocialIcons'

import image1 from '@/images/photos/image-1.png'
import image2 from '@/images/photos/image-2.jpg'
import image3 from '@/images/photos/image-3.jpg'
import image4 from '@/images/photos/image-4.jpg'
import image5 from '@/images/photos/image-5.jpg'

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

function Photos() {
  let rotations = ['rotate-2', '-rotate-2', 'rotate-2', 'rotate-2', '-rotate-2']

  return (
    <div className="mt-16 sm:mt-20">
      <div className="-my-4 flex justify-center gap-5 overflow-hidden py-4 sm:gap-8">
        {[image1].map((image, imageIndex) => (
          <div
            key={image.src}
            className={clsx(
              'relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-800 sm:w-72 sm:rounded-2xl',
              rotations[imageIndex % rotations.length],
            )}
          >
            <Image
              src={image}
              alt=""
              sizes="(min-width: 640px) 18rem, 11rem"
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
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
            Test your knowledge of your city.
            <br />
            How well do you know your city&apos;s transit system? In this series
            of games, try to type as many station names from memory as possible.
          </p>
          <a
            href="https://memory.pour.paris"
            className="color-blue -mx-2 mt-2 inline-block rounded-full px-2 py-1 transition-all duration-200 hover:bg-zinc-100 dark:hover:bg-zinc-800"
          >
            Paris Metro
          </a>
          <br />
          <a
            href="https://london.metro-memory.com"
            className="color-blue -mx-2 mt-2 inline-block rounded-full px-2 py-1 transition-all duration-200 hover:bg-zinc-100 dark:hover:bg-zinc-800"
          >
            London Tube
          </a>
          <br />
          <a
            href="https://berlin.metro-memory.com"
            className="color-blue -mx-2 mt-2 inline-block rounded-full px-2 py-1 transition-all duration-200 hover:bg-zinc-100 dark:hover:bg-zinc-800"
          >
            Berlin U-Bahn & S-Bahn
          </a>

          <p className="mt-6">
            Inspired by the game Chris Arvin created for San Francisco, discover
            the memory challenge that went viral in Paris. How many of the 309
            Paris metro stations do you know by heart?
          </p>

          <p className="mt-6">
            If you want the game to be available in your city, send me a message
            on Twitter @_benjamintd.
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
      </Container>
      <Photos />
    </>
  )
}
