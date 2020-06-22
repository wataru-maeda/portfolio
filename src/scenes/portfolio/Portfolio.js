import React from 'react'
import { PropTypes } from 'prop-types'
import { styler } from 'styles'

import Hero from './Hero'
import Passion from './Passion'
import Profile from './Profile'
import Skill from './Skill'

const styles = styler({
  root: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
})

const Portfolio = () => {
  return (
    <div className={styles.root}>
      <Hero />
      <Passion />
      <Profile />
      <Skill />
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
