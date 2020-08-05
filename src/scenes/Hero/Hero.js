import React from 'react'
import { PropTypes } from 'prop-types'
import { motion } from 'framer-motion'
import { styler, images, breakpoints } from 'styles'
import { useTranslation } from 'react-i18next'

const styles = styler({
  root: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    height: '100vh',
    width: '100%',
    padding: 60,
    [breakpoints.desktop]: {
      height: 500,
    },
    [breakpoints.phone]: {
      padding: 30,
      height: 400,
    },
  },
  hero: {
    position: 'absolute',
    top: 0,
    right: 0,
    width: 500,
    borderRadius: '0 0 0 250px',
    [breakpoints.desktop]: {
      width: 400,
      borderRadius: '0 0 0 200px',
    },
    [breakpoints.phone]: {
      width: 190,
      borderRadius: '0 0 0 95px',
    },
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    width: 'calc(100% - 450px)',
    zIndex: 1,
    [breakpoints.desktop]: {
      width: 'calc(100% - 350px)',
    },
    [breakpoints.phone]: {
      paddingTop: 40,
      width: '100%',
    },
  },
  title: {
    zIndex: 1,
    fontSize: 80,
    fontWeight: 'bold',
    [breakpoints.phone]: {
      fontSize: 60,
      width: '100%',
      textShadow: '1px 1px white',
    },
  },
  subtitle: {
    zIndex: 1,
    fontSize: 24,
    fontWeight: '300',
    [breakpoints.phone]: {
      fontSize: 16,
      width: '100%',
      textShadow: '1px 1px white',
    },
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
  enter: { y: 0, opacity: 1, transition: { delay: 1, ...transition } },
}

const nameVariants = {
  exit: { y: '50%', opacity: 0, transition },
  enter: {
    y: '0%',
    opacity: 1,
    transition: { delay: 1, ...transition },
  },
}

const Hero = () => {
  const { t } = useTranslation()
  return (
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
          {t('hero.position')}
        </motion.p>
        <motion.h1 className={styles.title} variants={nameVariants}>
          {t('hero.name')}
        </motion.h1>
      </motion.div>
    </div>
  )
}

Hero.propTypes = {
  style: PropTypes.shape({}),
}

Hero.defaultProps = {
  style: {},
}

export default Hero
