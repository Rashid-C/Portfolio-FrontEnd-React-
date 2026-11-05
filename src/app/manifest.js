import { SITE_DESCRIPTION } from '@/data/site'

export default function manifest() {
  return {
    name: 'Rashid C | Full Stack Engineer',
    short_name: 'Rashid C',
    description: SITE_DESCRIPTION,
    start_url: '/',
    display: 'standalone',
    background_color: '#18181b',
    theme_color: '#0a0a0a',
    icons: [
      { src: '/icon.png', sizes: '64x64', type: 'image/png' },
      { src: '/apple-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  }
}
