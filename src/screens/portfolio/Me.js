import React, { Component } from 'react'
import { images } from '../../assets'
import Button from '../../components/Button'

export default class Me extends Component {
  render() {
    return (
      <div style={styles.container}>
        {this.renderProfile()}
      </div>
    )
  }

  renderProfile = () => {
    return (
      <div style={styles.profileContainer}>
        <h1 style={styles.title}>Profile</h1>
        <img src={images.profile} style={styles.profileImg} />
        <p style={styles.description}>
          Hello, my name is Wataru who love creating app/web for customers.
          I have created software (iOS/Android/Hybrid app/web/APIs..) for customers since 2014.
          If you looking for a frontend developer who can build modern UI/UX with high performance, here I come. Feel free to contact me!         
        </p>
        <Button title="Details of app production request" style={styles.button} />
        <Button title="Details of web production request" style={styles.button} />
        <Button title="Inquiry" style={styles.button} />
      </div>
    )
  }
}

const styles = {
  container: {
    width: '100%',
    height: '100%',
    background: '#363e49',
    padding: 60,
  },
  profileContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  description: {
    color: 'gray',
    textAlign: 'center',
    fontSize: 18,
  },
  title: {
    fontSize: '2em',
    color: '#63636e',
    margin: '0 0 30px',
  },
  profileImg: {
    verticalAlign: 'middle',
    objectFit: 'cover',
    borderRadius: 50,
    width: 100,
    height: 100,
    margin: '0 0 15px',
  },
  button: {
    color: '#3295e3',
    fontSize: 16,
    background: 'transparent',
    height: 44,
  },
}