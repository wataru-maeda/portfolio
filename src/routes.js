import React, { useEffect } from 'react'
import i18next from 'i18next'
import Loadable from 'react-loadable'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
import { colors } from 'styles'

const Portfolio = Loadable({
  loader: () => import('./scenes'),
  loading: () => <div />,
})

const Router = () => {
  useEffect(() => {
    // update css variables
    Object.keys(colors).forEach(key => {
      const cssKey = `--${key}`
      const cssVal = colors[key]
      document.body.style.setProperty(cssKey, cssVal)
    })
    // get browser language
    const browserLang =
      window.navigator.language || window.navigator.userLanguage
    const isJp = browserLang.includes('ja')
    i18next.changeLanguage(isJp ? 'jp' : 'en')
  }, [])

  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Portfolio} />
        <Redirect to="/" />
      </Switch>
    </BrowserRouter>
  )
}

export default Router
