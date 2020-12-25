import React, { Component } from 'react'
import { Provider } from 'react-redux'
import emailjs from 'emailjs-com'
import ReactGA from 'react-ga'
import { loadFontIcons } from 'components/FontIcon'
import store from 'utils/store'
import { emailJsUserId, gaTrackingID } from 'utils/config'
import Router from './routes'

emailjs.init(emailJsUserId)

class App extends Component {
  componentDidMount() {
    loadFontIcons()
    ReactGA.initialize(gaTrackingID)
    ReactGA.pageview(window.location.pathname + window.location.search)
  }

  render() {
    return (
      <Provider store={store}>
        <Router />
      </Provider>
    )
  }
}

export default App
