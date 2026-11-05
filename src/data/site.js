import { contact } from './contact'

export const SITE_URL = 'https://www.rashidc.in'
export const SITE_NAME = 'Rashid C Portfolio'
export const SITE_TITLE = 'Rashid C | Full Stack Engineer in Dubai, UAE'
export const SITE_DESCRIPTION =
  'Full Stack Engineer in Dubai, UAE, available immediately. 4 years building ERP, SaaS and e-commerce systems with Next.js, React, Node.js, Django and PostgreSQL.'

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

const PERSON_ID = `${SITE_URL}/#person`
const WEBSITE_ID = `${SITE_URL}/#website`

export const siteJsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebSite',
      '@id': WEBSITE_ID,
      name: SITE_NAME,
      url: `${SITE_URL}/`,
      alternateName: alternateNames,
      publisher: { '@id': PERSON_ID },
    },
    {
      '@type': 'Person',
      '@id': PERSON_ID,
      name: 'Rashid C',
      alternateName: alternateNames,
      url: `${SITE_URL}/`,
      image: `${SITE_URL}/opengraph-image`,
      description: SITE_DESCRIPTION,
      jobTitle: 'Full Stack Engineer',
      email: `mailto:${contact.email}`,
      telephone: '+971556801022',
      worksFor: {
        '@type': 'Organization',
        name: 'AZC Electronics Trading LLC',
      },
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Dubai',
        addressCountry: 'AE',
      },
      alumniOf: {
        '@type': 'CollegeOrUniversity',
        name: 'University of Calicut',
      },
      knowsLanguage: ['English', 'Malayalam', 'Hindi'],
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

/** Marks the home page as this person's profile page. */
export const profilePageJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ProfilePage',
  url: `${SITE_URL}/`,
  name: SITE_TITLE,
  isPartOf: { '@id': WEBSITE_ID },
  mainEntity: { '@id': PERSON_ID },
}

export const personReference = { '@id': PERSON_ID }
