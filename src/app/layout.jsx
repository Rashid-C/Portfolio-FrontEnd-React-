/**
 * @copyright 2026 RASHID_C
 * @license Apache-2.0
 */

import { Inter } from 'next/font/google'
import 'lenis/dist/lenis.css'
import './globals.css'

import FloatingWhatsApp from '@/components/FloatingWhatsApp'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import JsonLd from '@/components/JsonLd'
import SmoothScroll from '@/components/SmoothScroll'
import {
  SITE_DESCRIPTION,
  SITE_NAME,
  SITE_TITLE,
  SITE_URL,
  siteJsonLd,
} from '@/data/site'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const OG_DESCRIPTION =
  'Full Stack Engineer in the UAE, available immediately. Sole engineer of NezeX One, a multi-tenant cloud ERP live in the UAE. Next.js, Node.js, NestJS, Django, PostgreSQL, AWS.'

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: SITE_TITLE,
    template: '%s | Rashid C',
  },
  description: SITE_DESCRIPTION,
  keywords: [
    'Rashid C',
    'Rashidc',
    'Rashid-C',
    'full stack engineer Dubai',
    'full stack developer UAE',
    'Next.js developer Dubai',
    'Node.js developer UAE',
    'NestJS developer',
    'Django developer Dubai',
    'ERP developer UAE',
    'software engineer Abu Dhabi',
    'immediate joiner Dubai',
  ],
  authors: [{ name: 'Rashid C', url: SITE_URL }],
  creator: 'Rashid C',
  robots: { index: true, follow: true },
  openGraph: {
    type: 'profile',
    locale: 'en_US',
    siteName: SITE_NAME,
    url: '/',
    title: 'Rashid C | Full Stack Engineer in Dubai, UAE',
    description: OG_DESCRIPTION,
  },
  twitter: {
    card: 'summary_large_image',
    site: '@rashidc_in',
    creator: '@rashidc_in',
    title: 'Rashid C | Full Stack Engineer in Dubai, UAE',
    description: OG_DESCRIPTION,
  },
}

export const viewport = {
  themeColor: '#0a0a0a',
}

export default function RootLayout({ children }) {
  return (
    <html
      lang='en'
      className={`${inter.variable} scrollbar-thin scrollbar-track-zinc-800 scrollbar-thumb-zinc-500`}
    >
      <head>
        {/* Without JavaScript the reveal animation can't run, so show everything. */}
        <noscript>
          <style
            dangerouslySetInnerHTML={{
              __html: '.reveal-up{opacity:1!important;transform:none!important}',
            }}
          />
        </noscript>
      </head>
      <body>
        <JsonLd data={siteJsonLd} />
        <SmoothScroll>
          <Header />
          {children}
          <Footer />
          <FloatingWhatsApp />
        </SmoothScroll>
      </body>
    </html>
  )
}
