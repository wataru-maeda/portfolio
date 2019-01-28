import React, { Component } from 'react'

export default class About extends Component {
  render() {
    return (
      <div style={styles.container}>
        <h1 style={styles.title}>About</h1>    
      </div>
    )
  }
}

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    background: '#f2f2f2',
    padding: 60,
  },
  title: {
    fontSize: '2em',
    color: '#63636e',
    margin: '0 0 30px',
  },
}