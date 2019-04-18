import React from 'react'

export default ({
  title,
  disabled = false,
  style = {},
  className = '',
  onClick,
  children,
}) => {
  return (
    <button
      className={`btn ${className}`}
      style={{ height: 60, ...style }}
      onClick={onClick}
      disabled={disabled}
    >
      {title && title}
      {children}
    </button>
  )
}