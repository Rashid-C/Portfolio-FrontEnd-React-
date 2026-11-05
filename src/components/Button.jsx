/**
 * @copyright 2025 RASHID_C
 * @license Apache-2.0
 */

/**
 * Node modules
 */
import PropTypes from 'prop-types'
import cv from '../images/Rashid_C_Full_Stack_Engineer_UAE.pdf'

const CV_FILENAME = 'Rashid_C_Full_Stack_Engineer_UAE.pdf'

/**
 * Primary Button
 */

const ButtonPrimary = ({
  href,
  target = '_blank',
  label,
  icon,
  classes = '',
  ariaLabel = label,
  rel = 'noopener noreferrer',
}) => {
  if (href) {
    return (
      <a
        href={href}
        target={target}
        className={`btn btn-primary ${classes}`}
        aria-label={ariaLabel}
        rel={rel}
      >
        {label}
        {icon && (
          <span className='material-symbols-rounded' aria-hidden='true'>
            {icon}
          </span>
        )}
      </a>
    )
  }

  return (
    <a
      href={cv}
      target={target}
      className={`btn btn-primary ${classes}`}
      download={CV_FILENAME}
      aria-label={ariaLabel}
      rel={rel}
    >
      {label}
      {icon && (
        <span className='material-symbols-rounded' aria-hidden='true'>
          {icon}
        </span>
      )}
    </a>
  )
}

ButtonPrimary.propTypes = {
  label: PropTypes.string.isRequired,
  href: PropTypes.string,
  target: PropTypes.string,
  icon: PropTypes.string,
  classes: PropTypes.string,
  ariaLabel: PropTypes.string,
  rel: PropTypes.string,
}

/**
 * Outline Button
 */

const ButtonOutline = ({
  href,
  target = '_self',
  label,
  icon,
  classes = '',
}) => {
  if (href) {
    return (
      <a
        href={href}
        target={target}
        rel={target === '_blank' ? 'noopener noreferrer' : undefined}
        className={`btn btn-outline ${classes}`}
      >
        {label}
        {icon ? (
          <span className='material-symbols-rounded' aria-hidden='true'>
            {icon}
          </span>
        ) : null}
      </a>
    )
  } else {
    return (
      <button className={`btn btn-outline ${classes}`}>
        {label}
        {icon ? (
          <span className='material-symbols-rounded' aria-hidden='true'>
            {icon}
          </span>
        ) : null}
      </button>
    )
  }
}

ButtonOutline.propTypes = {
  label: PropTypes.string.isRequired,
  href: PropTypes.string,
  target: PropTypes.string,
  icon: PropTypes.string,
  classes: PropTypes.string,
}

export { ButtonPrimary, ButtonOutline }