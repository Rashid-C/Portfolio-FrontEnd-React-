/**
 * @copyright 2024 RASHID_C
 * @license Apache-2.0
 */

/**
 * Node modules
 */
import PropTypes from "prop-types";
import cv from '../../Rashid_C.pdf'

/**
 * Primary Button
 */

const ButtonPrimary = ({
  href,
  target = "_self",
  label,
  icon,
  classes = "",
}) => {
  if (!href) {
    return (
      <a
        href={cv}
        target={target}
        className={`btn btn-primary ${classes}`}
        download={cv}
      >
        {label}
        {icon ? (
          <span className="material-symbols-rounded" aria-hidden="true">
            {icon}
          </span>
        ) : null}
      </a>
    );
  } else {
    return (
      <button className={`btn btn-primary ${classes}`}>
        {label}
        {icon ? (
          <span className="material-symbols-rounded" aria-hidden="true">
            {icon}
          </span>
        ) : null}
      </button>
    );
  }
};

ButtonPrimary.propTypes = {
  label: PropTypes.string.isRequired,
  href: PropTypes.string,
  target: PropTypes.string,
  icon: PropTypes.string,
  classes: PropTypes.string,
};

/**
 * Outline Button
 */

const ButtonOutline = ({
  href,
  target = "_self",
  label,
  icon,
  classes = "",
}) => {
  if (href) {
    return (
      <a href={href} target={target} className={`btn btn-outline ${classes}`}>
        {label}
        {icon ? (
          <span className="material-symbols-rounded" aria-hidden="true">
            {icon}
          </span>
        ) : null}
      </a>
    );
  } else {
    return (
      <button className={`btn btn-outline ${classes}`}>
        {label}
        {icon ? (
          <span className="material-symbols-rounded" aria-hidden="true">
            {icon}
          </span>
        ) : null}
      </button>
    );
  }
};

ButtonOutline.propTypes = {
  label: PropTypes.string.isRequired,
  href: PropTypes.string,
  target: PropTypes.string,
  icon: PropTypes.string,
  classes: PropTypes.string,
};

export { ButtonPrimary, ButtonOutline };
