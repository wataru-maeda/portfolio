import React from 'react'
import { PropTypes } from 'prop-types'
import { styler, colors } from 'styles'

const styles = styler({
  root: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    padding: '80px 60px',
    background: colors.lightGray,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: colors.blackGray,
    marginBottom: 30,
  },
  subtitle: {
    fontSize: 20,
    fontWeight: '300',
    marginBottom: 60,
  },
})

const Skill = () => {
  return (
    <div className={styles.root}>
      <h2 className={styles.title}>Skills</h2>
      <aside className={styles.subtitle}>Able To Work All Stage</aside>
    </div>
  )
}

Skill.propTypes = {
  style: PropTypes.shape({}),
}

Skill.defaultProps = {
  style: {},
}

export default Skill
