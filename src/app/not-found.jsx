import Link from 'next/link'

export const metadata = {
  title: 'Page not found',
  robots: { index: false, follow: true },
}

export default function NotFound() {
  return (
    <main className='container pt-36 lg:pt-44'>
      <h1 className='headline-2 mb-4'>This page doesn&apos;t exist</h1>
      <p className='text-zinc-400 mb-8 max-w-[50ch]'>
        The link may be out of date. My projects and contact details are all on
        the home page.
      </p>
      <Link href='/' className='btn btn-primary'>
        Go to the home page
      </Link>
    </main>
  )
}
