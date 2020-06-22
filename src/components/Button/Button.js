import React from 'react'
import PropTypes from 'prop-types'
import FontIcon from 'components/FontIcon'
import { styler } from 'styles'
import Spinner from 'components/Spinner'
import './button.css'

const styles = styler({
  root: {
    borderRadius: 3,
    background: 'transparent',
    outline: 'none',
    border: 'none',
    '&:focus': {
      outline: 0,
      boxShadow: 'none',
    },
  },
})

const Button = ({
  label,
  icon,
  className,
  spinnerClassName,
  iconClassName,
  style,
  spinnerStyle,
  iconStyle,
  onClick,
  children,
  disabled,
  isLoading,
}) => (
  <button
    type="button"
    className={`${styles.root} ${className}`}
    style={style}
    onClick={onClick}
    disabled={disabled || isLoading}
  >
    {isLoading ? (
      <Spinner className={spinnerClassName} iconStyle={spinnerStyle} />
    ) : (
      <>
        {icon && (
          <FontIcon icon={icon} className={iconClassName} style={iconStyle} />
        )}
        {label}
        {children}
      </>
    )}
  </button>
)

Button.propTypes = {
  label: PropTypes.string,
  icon: PropTypes.string,
  className: PropTypes.string,
  spinnerClassName: PropTypes.string,
  iconClassName: PropTypes.string,
  style: PropTypes.shape({}),
  spinnerStyle: PropTypes.shape({}),
  iconStyle: PropTypes.shape({}),
  children: PropTypes.node,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  isLoading: PropTypes.bool,
}

Button.defaultProps = {
  label: '',
  icon: null,
  className: '',
  spinnerClassName: '',
  iconClassName: '',
  style: {},
  spinnerStyle: {},
  iconStyle: {},
  onClick: () => {},
  children: null,
  disabled: false,
  isLoading: false,
}

export default Button
