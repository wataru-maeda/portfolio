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
          <Header />
          <About id="about"/>
          <Me id="me"/>
          <Projects id="projects"/>
          <Inquiry id="inquiry"/>
        </div>
      </Navigation>
    );
  }
}

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    background: 'white',
    minHeight: '100vh',
  },
}
