import React from 'react'
// import './style.css'

export default () => (
  <header style={styles.container} className="bg">
    <h1 style={styles.subtitle}>Fullstack Developer</h1>
    <h1 style={styles.title}>Wataru Maeda</h1>
  </header>
)

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    height: '80vh',
    padding: 60,
  },
  title: {
    fontSize: '5em',
    color: 'black',
  },
  subtitle: {
    fontSize: '2em',
    color: '#63636e',
  },
}