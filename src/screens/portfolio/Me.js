import React, { Component } from 'react'

export default class Me extends Component {
  render() {
    return (
      <div style={styles.container}>
        <h1 style={styles.title}>Profile</h1>
      </div>
    )
  }
}

const styles = {
  container: {
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    background: '#363e49',
    padding: 60,
  },
  title: {
    fontSize: '2em',
    color: '#63636e',
    margin: '0 0 30px',
  },
}