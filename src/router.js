import React, { Component } from 'react'
import firebase from 'firebase'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
import Portfolio from './screens/portfolio'
import { switchLanguage } from './redux/actions/LangActions'
import ReactGA from 'react-ga'
import { GA_TRACKING_KEY, FIREBASE_CONFIG } from './utils/keys'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'
import './styles/global.css'

export default class Router extends Component {
  componentWillMount() {
    firebase.initializeApp(FIREBASE_CONFIG)
    firebase.functions()
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
                <Route exact path="/jp" render={() => {
                  switchLanguage()
                  return (
                    <Portfolio />
                  )
                }} />
                <Route component={Portfolio} />
                <Redirect to="/" />
              </Switch>
            )
            : (
              <Switch>
                <Route exact path="/" component={Portfolio} />
                <Route exact path="/jp" render={() => {
                  switchLanguage()
                  return (
                    <Portfolio />
                  )
                }} />
                <Route component={Portfolio} />
                <Redirect to="/" />
              </Switch>
            )}
        </div>
      </BrowserRouter>
    )
  }
}
