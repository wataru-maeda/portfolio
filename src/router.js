import React, { Component } from 'react'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
import Portfolio from './screens/portfolio'
import ReactGA from 'react-ga'
import { GA_TRACKING_KEY } from './utils/keys'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'
import './styles/global.css'

export default class Router extends Component {
  componentWillMount() {
    ReactGA.initialize(GA_TRACKING_KEY);
    ReactGA.pageview('/home');
  }

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
