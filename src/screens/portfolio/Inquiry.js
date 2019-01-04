import React, { Component } from 'react'
import Input from '../../components/Input'
import Button from '../../components/Button'
import './style.css'

export default class Inquiry extends Component {
  onChange = () => {

  }

  render() {
    return (
      <div className="bg-inquiry" style={styles.container}>
        <h1 style={styles.title}>GET IN TOUCH</h1>
        <div style={styles.contentsContainer}>
          <div style={styles.userContainer}>
            <Input
              type="text"
              name="name"
              title="Name *"
              placeholder=""
              onChange={this.onChange}
            />
            <Input
              type="email"
              name="email"
              title="Email *"
              placeholder=""
              onChange={this.onChange}
            />
            <Input
              type="phone"
              name="phone"
              title="Phone"
              placeholder=""
              onChange={this.onChange}
            />
          </div>
          <div className="form-group" style={styles.messageContainer}>
            <label>Message *</label>
            <textarea className="form-control rounded-1" rows="11"></textarea>
          </div>
        </div>
        <Button title="Submit" className="btn-primary" style={styles.submitButton}/>
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
    background: '#fafafa',
    padding: '80px 160px',
  },
  contentsContainer: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
  },
  userContainer: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    margin: '0 20px 0 0',
  },
  messageContainer: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    margin: '0 0 0 20px',
  },
  title: {
    fontSize: '2em',
    color: '#63636e',
    margin: '0 0 40px',
  },
  submitButton: {
    fontSize: '1.5em',
    fontWeight: 'bold',
    width: '30%',
    borderRadius: 30,
    margin: '60px 0 0',
  },
}