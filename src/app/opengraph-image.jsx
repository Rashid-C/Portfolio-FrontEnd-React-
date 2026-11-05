import { readFile } from 'node:fs/promises'
import { join } from 'node:path'
import sharp from 'sharp'
import { ImageResponse } from 'next/og'

export const alt = 'Rashid C, Full Stack Engineer in Dubai, UAE'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

/** The preview shown when the site is shared on WhatsApp, LinkedIn or X. */
export default async function OpenGraphImage() {
  const photo = await sharp(
    await readFile(join(process.cwd(), 'src/images/profile.png'))
  )
    .resize(460, 460)
    .png()
    .toBuffer()

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '70px',
          background: '#18181b',
          color: '#fafafa',
        }}
      >
        <div style={{ display: 'flex', flexDirection: 'column', width: 600 }}>
          <div style={{ fontSize: 28, color: '#34d399', marginBottom: 24 }}>
            Available immediately in Dubai, UAE
          </div>
          <div style={{ fontSize: 84, fontWeight: 700, lineHeight: 1.05, marginBottom: 24 }}>
            Rashid C
          </div>
          <div style={{ fontSize: 40, color: '#38bdf8', marginBottom: 32 }}>
            Full Stack Engineer
          </div>
          <div style={{ fontSize: 28, color: '#a1a1aa', lineHeight: 1.4 }}>
            ERP, SaaS and e-commerce systems with Next.js, Node.js, Django and
            PostgreSQL
          </div>
        </div>

        <div
          style={{
            display: 'flex',
            width: 460,
            height: 460,
            borderRadius: 56,
            overflow: 'hidden',
            background: 'linear-gradient(to top, #38bdf8 0%, #38bdf8 40%, #18181b 75%)',
          }}
        >
          {/* next/image can't run inside an image generator */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={`data:image/png;base64,${photo.toString('base64')}`}
            width={460}
            height={460}
            alt=''
          />
        </div>
      </div>
    ),
    size
  )
}
