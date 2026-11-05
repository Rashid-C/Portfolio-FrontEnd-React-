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
  'Full Stack Engineer in the UAE, available immediately. Sole engineer of NezeX One, a multi-tenant cloud ERP live in the UAE.'

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: SITE_TITLE,
    template: '%s | Rashid C',
  },
  description: SITE_DESCRIPTION,
  authors: [{ name: 'Rashid C', url: SITE_URL }],
  creator: 'Rashid C',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'profile',
    locale: 'en_US',
    siteName: SITE_NAME,
    url: '/',
    title: SITE_TITLE,
    description: OG_DESCRIPTION,
  },
  twitter: {
    card: 'summary_large_image',
    site: '@rashidc_in',
    creator: '@rashidc_in',
    title: SITE_TITLE,
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
