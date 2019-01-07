import React, { Component } from 'react'
import Header from './Header'
import Publishments from './Publishments'
import Inquiry from './Inquiry'
import Me from './Me'

export default class Portfolio extends Component {
  render() {
    return (
      <div style={styles.container}>
        <Header />
        <Me />
        <Publishments />
        <Inquiry />
      </div>
    );
  }
}

const styles = {
  container: {
    background: 'white',
    minHeight: '100vh',
  }
}
