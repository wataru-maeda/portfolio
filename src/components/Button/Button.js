import React from 'react'
import PropTypes from 'prop-types'
import FontIcon from 'components/FontIcon'
import { styler } from 'styles'
import Spinner from 'components/Spinner'
import { motion } from 'framer-motion'
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
  image,
  className,
  spinnerClassName,
  iconClassName,
  imageClassName,
  style,
  spinnerStyle,
  iconStyle,
  imageStyle,
  onClick,
  children,
  disabled,
  isLoading,
}) => (
  <motion.button
    type="button"
    className={`${styles.root} ${className}`}
    style={style}
    onClick={onClick}
    disabled={disabled || isLoading}
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
  >
    {isLoading ? (
      <Spinner className={spinnerClassName} iconStyle={spinnerStyle} />
    ) : (
      <>
        {icon && (
          <FontIcon icon={icon} className={iconClassName} style={iconStyle} />
        )}
        {image && (
          <img
            src={image}
            className={imageClassName}
            style={imageStyle}
            alt=""
          />
        )}
        {label}
        {children}
      </>
    )}
  </motion.button>
)

Button.propTypes = {
  label: PropTypes.string,
  icon: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string),
  ]),
  image: PropTypes.string,
  className: PropTypes.string,
  spinnerClassName: PropTypes.string,
  iconClassName: PropTypes.string,
  imageClassName: PropTypes.string,
  style: PropTypes.shape({}),
  spinnerStyle: PropTypes.shape({}),
  iconStyle: PropTypes.shape({}),
  imageStyle: PropTypes.shape({}),
  children: PropTypes.node,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  isLoading: PropTypes.bool,
}

Button.defaultProps = {
  label: '',
  icon: null,
  image: null,
  className: '',
  spinnerClassName: '',
  iconClassName: '',
  imageClassName: '',
  style: {},
  spinnerStyle: {},
  iconStyle: {},
  imageStyle: {},
  onClick: () => {},
  children: null,
  disabled: false,
  isLoading: false,
}

export default Button
