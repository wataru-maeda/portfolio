import React, { Component } from 'react'
// import { images } from '../../assets'
import Header from './Header'
import Publishments from './Publishments'
import Inquiry from './Inquiry'

export default class Portfolio extends Component {
  render() {
    return (
      <div style={styles.container}>
        <Header />
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
