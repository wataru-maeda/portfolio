import React from 'react'

export const Input = ({
  title,
  type,
  id,
  name,
  value,
  placeholder,
  onChange,
  error = '',
  maxLength = '50',
  style = {}
}) => {
  const className = error.length > 0
    ? 'form-control is-invalid'
    : 'form-control'
  return (
    <div className="form-group">
      { title && <label>{title}</label> }
      <input
        value={value}
        type={type}
        id={id}
        name={name}
        className={className}
        onChange={onChange}
        placeholder={placeholder}
        maxLength={maxLength}
        style={{ height: 60, ...style }}
      />
      <div className="invalid-feedback">
        {error}
      </div>
    </div>
  )
}

export default Input
