import React from 'react'
import { PropTypes } from 'prop-types'
import { styler, images } from 'styles'

const styles = styler({
  root: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    height: '100vh',
    width: '100%',
    padding: 60,
    position: 'relative',
  },
  hero: {
    position: 'absolute',
    right: 0,
    top: 0,
    width: 500,
    borderRadius: '0 0 0 250px',
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    width: 'calc(100% - 500px)',
  },
  title: {
    fontSize: 80,
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 24,
    fontWeight: '300',
  },
})

const Hero = () => (
  <div className={styles.root}>
    <img src={images.hero} className={styles.hero} alt="hero" />
    <div className={styles.container}>
      <aside className={styles.subtitle}>Full-stack Developer</aside>
      <h1 className={styles.title}>Wataru Maeda</h1>
    </div>
  </div>
)

Hero.propTypes = {
  style: PropTypes.shape({}),
}

Hero.defaultProps = {
  style: {},
}

export default Hero
