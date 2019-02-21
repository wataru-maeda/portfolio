import React, { Component } from 'react'
import Radium from 'radium'
import Input from '../../components/Input'
import Button from '../../components/Button'
import { message } from '../../localization/pf'
import { vali } from '../../utils/validation'

class Inquiry extends Component {
  state = {
    name: '',
    email: '',
    phone: '',
    errors: {},
  }

  onChange = (e) => {
    const { name, value } = e.target
    this.setState({ [name] : value })
  }

  onSubmit = () => {
    const { isError, errors }  = vali(this.state)
    this.setState({ errors })
    if (isError) return
    
    // TOOD: send email
  }

  render() {
    const { id, lang } = this.props
    const { errors } = this.state
    return (
      <div className="bg-inquiry" style={styles.container} id={id}>
        <h1 style={styles.title}>GET IN TOUCH</h1>
        <div style={styles.contentsContainer}>
          <div style={styles.userContainer}>
            <Input
              type="text"
              name="name"
              title={message.name[lang]}
              placeholder=""
              error={errors.name}
              onChange={this.onChange}
            />
            <Input
              type="email"
              name="email"
              title={message.email[lang]}
              placeholder=""
              error={errors.email}
              onChange={this.onChange}
            />
            <Input
              type="phone"
              name="phone"
              title={message.phone[lang]}
              placeholder=""
              error={errors.phone}
              onChange={this.onChange}
            />
          </div>
          <div className="form-group" style={styles.messageContainer}>
            <label>{message.message[lang]}</label>
            <textarea className="form-control rounded-1" rows="11"></textarea>
          </div>
        </div>
        <Button
          title={message.submit[lang]}
          className="btn-primary"
          style={styles.submitButton}
          onClick={this.onSubmit}
        />
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
    padding: '80px 160px',
    '@media (max-width: 1024px)': {
      padding: '60px 30px',
    },
  },
  contentsContainer: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    '@media (max-width: 736px)': {
      flexDirection: 'column',
    },
  },
  userContainer: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    margin: '0 20px 0 0',
    '@media (max-width: 736px)': {
      margin: 0,
    },
  },
  messageContainer: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    margin: '0 0 0 20px',
    '@media (max-width: 736px)': {
      margin: 0,
    },
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
    minWidth: 300,
    background: 'black',
    border: 'none',
    margin: '60px 0 0',
  },
}

export default Radium(Inquiry)
