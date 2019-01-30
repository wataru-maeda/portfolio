import React, { Component } from 'react'
import { images } from '../../assets'

const skills = [
  { name: 'Swift', frequency: 90 },
  { name: 'Objective-C', frequency: 70 },
  { name: 'React Native', frequency: 70 },
  { name: 'React JS', frequency: 60 },
  { name: 'Node.js', frequency: 30 },
  { name: 'Java', frequency: 50 },
  { name: 'UI Design', frequency: 40 },
]

export default class Me extends Component {
  renderProfile = () => {
    return (
      <div style={styles.profileContainer}>
        <img src={images.profile} style={styles.profileImg} />
        <p style={styles.description}>
          Hello, my name is Wataru who is creating software for customers.
          I have created app, web and sometimes APIs for customers since 2014.
          If you looking for a frontend developer, here I come. Feel free to contact me!
        </p>
      </div>
    )
  }

  renderSkillItem = ({ name, frequency }) => (
    <div style={styles.skillItemContainer}>
      <div style={styles.skillName}>{name}</div>
      <div style={styles.skillFrequencyContainer}>
        <div style={{ ...styles.skillFrequency, width: `${frequency}%` }}>
          {`${frequency} %`}
        </div>
      </div>
    </div>
  )

  renderSkills = () => (
    <div style={styles.skillsContainer}>
      {skills.map(s => this.renderSkillItem(s))}
    </div>
  )

  render() {
    return (
      <div style={styles.container}>
        <h1 style={styles.title}>Profile & Skills</h1>
        <div style={styles.contentsContainer}>
          {this.renderProfile()}
          {this.renderSkills()}
        </div>
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
    padding: 60,
  },
  contentsContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  profileContainer: {
    width: '40%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  skillsContainer: {
    width: '50%',
  },
  skillItemContainer: {
    flex: 1,
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    margin: '10px 20px',
  },
  skillFrequencyContainer: {
    flex: 1,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    background: '#f8f9fa',
  },
  description: {
    color: '#676772',
    textAlign: 'center',
    fontSize: 18,
    padding: '0 0 40px',
  },
  title: {
    fontSize: '2em',
    color: '#63636e',
    margin: '0 0 60px',
  },
  profileImg: {
    verticalAlign: 'middle',
    objectFit: 'cover',
    borderRadius: 60,
    width: 120,
    height: 120,
    margin: '0 0 20px',
  },
  skillName: {
    width: 110,
    fontSize: '0.9em',
    color: '#676772',
    textAlign: 'left'
  },
  skillFrequency: {
    background: 'black',
    textAlign: 'center',
    fontSize: '0.75em',
    color: 'white',
    borderRadius: '0 3px 3px 0'
  },
}