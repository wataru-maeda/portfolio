export const tests = {
  name: {
    test: x => x && x.toString().replace(/\s/g, '').length > 0,
    error: 'inquiry.name.error',
  },
  email: {
    test: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    error: 'inquiry.email.error',
  },
  message: {
    test: x => x && x.toString().replace(/\s/g, '').length > 0,
    error: 'inquiry.message.error',
  },
}

export const validate = (v, t) => {
  const errors = {}
  let isError = false
  Object.keys(t).forEach(key => {
    const { test, error, options = {} } = t[key]
    const res = typeof test === 'function' ? test(v[key]) : test.test(v[key])
    const skip =
      (options.ifNotEmpty && !v[key]) ||
      (v[key] && !v[key].toString().length > 0)
    if (!res && !skip) {
      isError = true
      errors[key] = error
    }
  })
  return { isError, errors }
}
