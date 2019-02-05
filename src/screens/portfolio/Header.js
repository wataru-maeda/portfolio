import React from 'react'
import Radium from 'radium'

const Header = () => (
  <header style={styles.container} className="bg">
    <h1 style={styles.subtitle}>Frontend Developer</h1>
    <h1 style={styles.title}>Wataru Maeda</h1>
  </header>
)

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    height: '85vh',
    padding: 60,
    '@media (max-width: 736px)': {
      height: '50vh',
    },
  },
  title: {
    fontSize: '5em',
    color: 'black',
    '@media (max-width: 736px)': {
      fontSize: '4em',
    },
  },
  subtitle: {
    fontSize: '2em',
    color: '#63636e',
    '@media (max-width: 736px)': {
      fontSize: '1.5em',
    },
  },
}

export default Radium(Header)