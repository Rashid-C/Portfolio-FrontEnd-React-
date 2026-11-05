import { ImageResponse } from 'next/og'
import { caseStudies, getCaseStudy } from '@/data/projects'

export const alt = 'Project case study by Rashid C'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export function generateStaticParams() {
  return caseStudies.map(({ slug }) => ({ slug }))
}

/** The preview shown when a project page is shared. */
export default async function OpenGraphImage({ params }) {
  const { slug } = await params
  const { name, headline } = getCaseStudy(slug).caseStudy

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '70px',
          background: '#18181b',
          color: '#fafafa',
        }}
      >
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div style={{ fontSize: 36, color: '#38bdf8', marginBottom: 28 }}>
            {name}
          </div>
          <div style={{ fontSize: 68, fontWeight: 700, lineHeight: 1.15, maxWidth: 1000 }}>
            {headline}
          </div>
        </div>
        <div style={{ fontSize: 30, color: '#a1a1aa' }}>
          Rashid C, Full Stack Engineer in Dubai, UAE
        </div>
      </div>
    ),
    size
  )
}
