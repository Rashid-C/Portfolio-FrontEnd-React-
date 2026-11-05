/**
 * The contact form key is public by design (Web3Forms keys are meant for the
 * browser). The old Vite variable name still works, so an existing Vercel
 * setting keeps working after the move to Next.js.
 */
const contactFormKey =
  process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY ||
  process.env.VITE_WEB3FORMS_ACCESS_KEY ||
  ''

const CV_PATH = '/Rashid_C_Full_Stack_Engineer_UAE.pdf'

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  env: {
    NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY: contactFormKey,
  },
  images: {
    formats: ['image/avif', 'image/webp'],
  },
  async redirects() {
    return [
      {
        source: '/:path*',
        has: [{ type: 'host', value: '(www\\.)?rashidc\\.site' }],
        destination: 'https://www.rashidc.in/:path*',
        permanent: true,
      },
      { source: '/resume', destination: CV_PATH, permanent: false },
      { source: '/cv', destination: CV_PATH, permanent: false },
    ]
  },
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'X-Frame-Options', value: 'DENY' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' },
        ],
      },
    ]
  },
}

export default nextConfig
