import React from 'react'
// import './header.css'

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
    height: '90vh',
    padding: 60,
  },
  title: {
    fontSize: '4em',
    color: 'black',
  },
  subtitle: {
    fontSize: '2em',
    color: '#63636e',
  },
}