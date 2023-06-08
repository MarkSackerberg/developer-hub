import {
  changelogSection,
  documentationSection,
  recipesSection,
  referencesSection,
} from '@/shared/sections'
import { Logo } from './Logo'

export const bubblegum = {
  name: 'Bubblegum',
  headline: 'Compressed NFTs',
  description: 'TODO',
  path: 'bubblegum',
  logo: Logo,
  github: 'https://github.com',
  sections: [
    {
      ...documentationSection('bubblegum'),
      navigation: [
        {
          title: 'Introduction',
          links: [
            { title: 'Getting started', href: '/bubblegum' },
            { title: 'Installation', href: '/bubblegum/installation' },
          ],
        },
      ],
    },
    {
      ...referencesSection('bubblegum'),
      navigation: [
        {
          title: 'Introduction',
          links: [
            { title: 'Getting started', href: '/bubblegum/references' },
            { title: 'Installation', href: '/bubblegum/references/installation' },
          ],
        },
      ],
    },
    { ...recipesSection('bubblegum') },
    { ...changelogSection('bubblegum') },
  ],
}