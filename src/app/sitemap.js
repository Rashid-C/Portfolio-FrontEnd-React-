import { caseStudies } from '@/data/projects'
import { SITE_URL } from '@/data/site'

export default function sitemap() {
  const lastModified = new Date()

  return [
    {
      url: `${SITE_URL}/`,
      lastModified,
      changeFrequency: 'weekly',
      priority: 1,
    },
    ...caseStudies.map(({ slug }) => ({
      url: `${SITE_URL}/projects/${slug}`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.8,
    })),
  ]
}
