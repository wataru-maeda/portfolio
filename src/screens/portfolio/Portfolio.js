import React, { Component } from 'react'
import Navigation from './Navigation'
import Header from './Header'
import About from './About'
import Projects from './Projects'
import Inquiry from './Inquiry'
import Me from './Me'

export default class Portfolio extends Component {
  render() {
    return (
      <Navigation>
        <div style={styles.container}>
          <div style={styles.contentsContainer}>
            <Header />
            <About />
            <Projects />
            <Inquiry />
          </div>
          <div style={styles.sideContainer}>
            <Me />
          </div>
        </div>
      </Navigation>
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
