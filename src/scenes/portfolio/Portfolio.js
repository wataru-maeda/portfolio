import React from 'react'
import { PropTypes } from 'prop-types'
import { styler } from 'styles'

import Hero from './Hero'
import Passions from './Passions'
import Profile from './Profile'
import Skills from './Skills'
import Released from './Released'
import Inquiry from './Inquiry'
import Footer from './Footer'

const styles = styler({
  root: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
})

const Portfolio = () => {
  console.log('[##] window.navigator.language', window.navigator.language)
  return (
    <div className={styles.root}>
      <Hero />
      <Passions />
      <Profile />
      <Skills />
      <Released />
      <Inquiry />
      <Footer />
    </div>
  )
}

Portfolio.propTypes = {
  style: PropTypes.shape({}),
}

Portfolio.defaultProps = {
  style: {},
}

export default Portfolio
