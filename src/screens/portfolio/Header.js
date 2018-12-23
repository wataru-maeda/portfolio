import React from 'react'

export default () => (
  <header style={styles.container}>
    <h1 style={styles.subtitle}>Fullstack Developer</h1>
    <h1 style={styles.title}>Wataru Maeda</h1>
  </header>
)

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    background: 'white',
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