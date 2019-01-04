import React from 'react'

export default ({
  title,
  style = {},
  className = '',
  onClick,
}) => {
  return (
    <button
      className={`btn ${className}`}
      style={{ height: 60, ...style }}
      onClick={onClick}
    >
      {title}
    </button>
  )
}