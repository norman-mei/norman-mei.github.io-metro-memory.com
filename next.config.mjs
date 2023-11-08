import rehypePrism from '@mapbox/rehype-prism'
import nextMDX from '@next/mdx'
import remarkGfm from 'remark-gfm'

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'mdx'],
  rewrites() {
    return {
      beforeFiles: [
        // rewrites for individal repos -> monorepo migrations.
        {
          source: '/:path*',
          has: [
            {
              type: 'host',
              value: 'berlin.metro-memory.com',
            },
          ],
          destination: '/berlin/:path*',
        },
      ],
    }
  },
}

const withMDX = nextMDX({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [rehypePrism],
  },
})

export default withMDX(nextConfig)
