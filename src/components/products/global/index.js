import { documentationSection } from '@/shared/sections'
import { Hero } from './Hero'
import { Logo } from './Logo'

export const global = {
  name: 'Metaplex',
  headline: 'Developer Hub',
  description: 'One place for all Metaplex developer resources.',
  path: '',
  isFallbackProduct: true,
  logo: Logo,
  github: 'https://github.com/metaplex-foundation',
  className: 'accent-sky',
  heroes: [{ path: '/', component: Hero }],
  sections: [
    {
      ...documentationSection(''),
      navigation: [
        {
          title: 'Introduction',
          links: [
            { title: 'Overview', href: '/' },
            { title: 'Our products', href: '/products' },
          ],
        },
      ],
    },
  ],
}