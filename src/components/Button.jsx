/**
 * @copyright 2025 Shahriar Tamjid
 * @license Apache-2.0
 */

import React from 'react'
import PropTypes from 'prop-types'

// primary button
const ButtonPrimary = ({
    href,
    target = '_self',
    label,
    icon,
    classes
}) => {
    if (href) {
        return (
            <a href={href} target={target} className={"btn btn-primary " + classes}>
                {label}
                {icon ? <span className='material-icons-round' aria-hidden='true'>{icon}</span> : undefined}
            </a>
          )
    } else {
        return (
            <button className={'btn btn-primary ' + classes}>
                {label}
                {icon ? <span className='material-icons-round' aria-hidden='true'>{icon}</span> : undefined}
            </button>
          )
    }

}

ButtonPrimary.propTypes = {
    label: PropTypes.string.isRequired,
    href: PropTypes.string,
    target: PropTypes.string,
    icon: PropTypes.string,
    classes: PropTypes.string
}

export {
    ButtonPrimary
}