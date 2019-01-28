import React, { Component } from 'react'
import Header from './Header'
import Projects from './Projects'
import Inquiry from './Inquiry'
import Me from './Me'

export default class Portfolio extends Component {
  render() {
    return (
      <div style={styles.container}>
        <div style={styles.contentsContainer}>
          <Header />
          <Projects />
          <Inquiry />
        </div>
        <div style={styles.sideContainer}>
          <Me />
        </div>
      </div>
    );
  }
}

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'row',
    background: 'white',
    minHeight: '100vh',
  },
  contentsContainer: {
    width: '70%',
    display: 'flex',
    flexDirection: 'column',
  },
  sideContainer: {
    width: '30%',
  }
}
