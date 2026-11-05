import { contact } from './contact'

export const SITE_URL = 'https://www.rashidc.in'
export const SITE_NAME = 'Rashid C Portfolio'
export const SITE_TITLE =
  'Rashid C | Full Stack Engineer in Dubai, UAE – Next.js, Node.js, Django'
export const SITE_DESCRIPTION =
  'Rashid C is a Full Stack Engineer based in the UAE, available immediately in Dubai. 4 years building ERP, SaaS and e-commerce systems with Next.js, React, TypeScript, Node.js, NestJS, Django and PostgreSQL.'

export const CV_PATH = '/Rashid_C_Full_Stack_Engineer_UAE.pdf'
export const CV_FILENAME = 'Rashid_C_Full_Stack_Engineer_UAE.pdf'

const alternateNames = [
  'Rashid',
  'Rashidc',
  'Rashid C',
  'Rashid_C',
  'Rashid-C',
  'rashidc___',
]

export const siteJsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebSite',
      name: SITE_NAME,
      url: `${SITE_URL}/`,
      alternateName: alternateNames,
    },
    {
      '@type': 'Person',
      name: 'Rashid C',
      alternateName: alternateNames,
      url: `${SITE_URL}/`,
      jobTitle: 'Full Stack Engineer',
      email: `mailto:${contact.email}`,
      telephone: '+971556801022',
      worksFor: {
        '@type': 'Organization',
        name: 'AZC Electronics Trading LLC',
      },
      homeLocation: {
        '@type': 'Place',
        name: 'Dubai, United Arab Emirates',
      },
      alumniOf: {
        '@type': 'CollegeOrUniversity',
        name: 'University of Calicut',
      },
      areaServed: [
        'Dubai',
        'Abu Dhabi',
        'Sharjah',
        'United Arab Emirates',
        'GCC',
      ],
      sameAs: [contact.linkedin, contact.github, contact.x, contact.instagram],
      knowsAbout: [
        'Next.js',
        'React.js',
        'TypeScript',
        'Node.js',
        'NestJS',
        'Django REST Framework',
        'PostgreSQL',
        'MySQL',
        'MongoDB',
        'REST APIs',
        'Docker',
        'AWS',
        'CI/CD',
        'ERP Development',
        'UAE VAT Invoicing',
        'Payment Integrations',
      ],
    },
  ],
}
