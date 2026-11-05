/**
 * @copyright 2026 RASHID_C
 * @license Apache-2.0
 */

import Link from 'next/link'
import { CV_FILENAME, CV_PATH } from '@/data/site'

const ButtonContent = ({ label, icon: Icon }) => (
  <>
    {label}
    {Icon && <Icon aria-hidden='true' />}
  </>
)

const ButtonLink = ({ href, variant, label, icon, classes = '', external = false }) => {
  const className = `btn btn-${variant} ${classes}`

  if (href.startsWith('/')) {
    return (
      <Link href={href} className={className}>
        <ButtonContent label={label} icon={icon} />
      </Link>
    )
  }

  return (
    <a
      href={href}
      className={className}
      {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
    >
      <ButtonContent label={label} icon={icon} />
    </a>
  )
}

export const ButtonPrimary = (props) => <ButtonLink variant='primary' {...props} />

export const ButtonOutline = (props) => <ButtonLink variant='outline' {...props} />

export const DownloadCvButton = ({ label = 'Download CV', icon }) => (
  <a href={CV_PATH} download={CV_FILENAME} className='btn btn-primary'>
    <ButtonContent label={label} icon={icon} />
  </a>
)
