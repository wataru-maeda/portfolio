import React, { Component } from 'react'
import { connect } from 'react-redux'
import Navigation from './Navigation'
import Header from './Header'
import About from './About'
import Projects from './Projects'
import Inquiry from './Inquiry'
import Me from './Me'

class Portfolio extends Component {
  render() {
    const { lang } = this.props
    return (
      <Navigation lang={lang}>
        <div style={styles.container}>
          <Header lang={lang}/>
          <About id="about" lang={lang}/>
          <Me id="me" lang={lang}/>
          <Projects id="projects" lang={lang}/>
          <Inquiry id="inquiry" lang={lang}/>
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

const mapStateToProps = state => {
  return {
    lang: state.lang.now,
  }
}

export default connect(mapStateToProps)(Portfolio)
