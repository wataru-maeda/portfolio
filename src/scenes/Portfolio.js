import React from 'react'
import SideMenu from 'subviews/SideMenu'
import { styler } from 'styles'

import Header from './Header'
import Hero from './Hero'
import Passions from './Passions'
import Profile from './Profile'
import Works from './Works'
import Skills from './Skills'
import Released from './Released'
import Inquiry from './Inquiry'
import Footer from './Footer'

const styles = styler({
  root: {
    display: 'flex',
    flexDirection: 'column',
    position: 'relative',
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
  },
})

const Portfolio = () => (
  <div id="outer-container" className={styles.root}>
    <SideMenu />
    <div id="page-wrap" className={styles.container}>
      <Header />
      <Hero />
      <Passions />
      <Profile />
      <Works />
      <Skills />
      <Released />
      <Inquiry />
      <Footer />
    </div>
  </div>
)

Portfolio.propTypes = {}
Portfolio.defaultProps = {}

export default Portfolio
