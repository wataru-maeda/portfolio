import React, { Component } from 'react'
// import { images } from '../../assets'
import Header from './Header'
import Publishments from './Publishments'

export default class Portfolio extends Component {
  render() {
    return (
      <div style={styles.container}>
        <Header />
        <Publishments />
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
