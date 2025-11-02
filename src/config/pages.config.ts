import { PagesDefs } from '@/types/pagedef.types'

export const pageDefs = {
  home: {
    href: '/',
    title: '@t<home-title>',
    description: '@t<home-description>',
    icon: 'ant:home',
  },
} as const satisfies PagesDefs
