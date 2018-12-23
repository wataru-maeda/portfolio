import React, { Component } from 'react'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
import Portfolio from './screens/portfolio'

import 'bootstrap/dist/css/bootstrap.min.css'
import './styles/global.css'

export default class Router extends Component {
  render() {
    const loggedIn = false
    return (
      <BrowserRouter>
        <div>
          { loggedIn
            ? (
              <Switch>
                <Route exact path="/" component={Portfolio} />
                <Route component={Portfolio} />
                <Redirect to="/" />
              </Switch>
            )
            : (
              <Switch>
                <Route exact path="/" component={Portfolio} />
                <Route component={Portfolio} />
                <Redirect to="/" />
              </Switch>
            )}
        </div>
      </BrowserRouter>
    )
  }
}
