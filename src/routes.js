import React, { useEffect } from 'react'
import Loadable from 'react-loadable'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
import { colors } from 'styles'
import { path } from 'utils/const'

const Portfolio = Loadable({
  loader: () => import('./scenes/portfolio'),
  loading: () => <div />,
})

const Router = () => {
  // update css variables
  useEffect(() => {
    Object.keys(colors).forEach(key => {
      const cssKey = `--${key}`
      const cssVal = colors[key]
      document.body.style.setProperty(cssKey, cssVal)
    })
  }, [])

  return (
    <BrowserRouter>
      <Switch>
        <Route path={path.portfolio} component={Portfolio} />
        <Redirect to={path.portfolio} />
      </Switch>
    </BrowserRouter>
  )
}

export default Router
