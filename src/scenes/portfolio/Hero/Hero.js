import React from 'react'
import { PropTypes } from 'prop-types'
import { motion } from 'framer-motion'
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

const transition = {
  duration: 1,
  ease: [0.43, 0.13, 0.23, 0.96],
}

const imageVariants = {
  exit: { x: 30, opacity: 0.3, transition },
  enter: {
    x: '0%',
    opacity: 1,
    transition,
  },
}

const titleVariants = {
  exit: { y: 100, opacity: 0, transition },
  enter: { y: 0, opacity: 1, transition: { delay: 2, ...transition } },
}

const nameVariants = {
  exit: { y: '50%', opacity: 0, transition },
  enter: {
    y: '0%',
    opacity: 1,
    transition: { delay: 1, ...transition },
  },
}

const Hero = () => (
  <div className={styles.root}>
    <motion.div
      className={styles.container}
      initial="exit"
      animate="enter"
      exit="exit"
    >
      <motion.img
        src={images.hero}
        className={styles.hero}
        variants={imageVariants}
        alt="hero"
      />
      <motion.p className={styles.subtitle} variants={titleVariants}>
        Full-stack Developer
      </motion.p>
      <motion.h1 className={styles.title} variants={nameVariants}>
        Wataru Maeda
      </motion.h1>
    </motion.div>
  </div>
)

Hero.propTypes = {
  style: PropTypes.shape({}),
}

Hero.defaultProps = {
  style: {},
}

export default Hero
