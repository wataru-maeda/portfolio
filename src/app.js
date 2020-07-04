import React, { Component } from 'react'
import { Provider } from 'react-redux'
import emailjs from 'emailjs-com'
import { loadFontIcons } from 'components/FontIcon'
import store from './utils/store'
import Router from './routes'

emailjs.init('user_6OLHBHCxFZkG5gAMQCE11')

class App extends Component {
  componentDidMount() {
    loadFontIcons()
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
