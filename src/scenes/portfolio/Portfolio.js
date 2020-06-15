import React from 'react'
import { PropTypes } from 'prop-types'
import { styler } from 'styles'

const styles = styler({
  root: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
})

const Portfolio = () => {
  return <div className={styles.root}>Portfolio</div>
}

Portfolio.propTypes = {
  style: PropTypes.shape({}),
}

Portfolio.defaultProps = {
  style: {},
}

export default Portfolio
