import React, { Component } from 'react'
import firebase from 'firebase'
import axios from 'axios'
import Radium from 'radium'
import Input from '../../components/Input'
import Button from '../../components/Button'
import { showAlert } from '../../components/Alert'
import { inquiry } from '../../localization/pf'
import { vali } from '../../utils/validation'

const initialState = {
  name: '',
  email: '',
  phone: '',
  message: '',
  errors: {},
}

class Inquiry extends Component {
  state = {
    ...initialState,
  }

  onChange = (e) => {
    const { name, value } = e.target
    this.setState({ [name] : value })
  }

  showSuccess = () => {
    const { lang } = this.props
    showAlert({
      title: inquiry.emailSentTitle[lang],
      message: inquiry.emailSentMessage[lang],
      icon: 'success',
      buttonTitle: 'Ok',
    }, () => {
      this.setState({ ...initialState })
    })
  }

  showError = (message) => {
    const { lang } = this.props
    showAlert({
      title: inquiry.emailFailedTitle[lang],
      message,
      icon: 'error',
      buttonTitle: 'Ok',
    })
  }

  onSubmit = () => {
    const { isError, errors }  = vali(this.state)
    this.setState({ errors })
    if (isError) return
    
    // send email
    const { lang } = this.props
    const { name, email, phone, message } = this.state

    const sendMail = firebase.functions().httpsCallable('sendMail')
    if (sendMail) sendMail({ name, email, phone, message, lang }).then(res => {
      const { data: { success, message } } = res
      success
        ? this.showSuccess()
        : this.showError(message)
    }).catch(e => {
      this.showError(e.message)
    })

    // axios.post('https://us-central1-portfolio-8316b.cloudfunctions.net/api/sendMail', { name, email, phone, message, lang }).then(res => {
    //   const { data: { success, message } } = res
    //   success
    //     ? this.showSuccess()
    //     : this.showError(message)
    // }).catch(e => {
    //   this.showError(e.message)
    // })
  }

  render() {
    const { id, lang } = this.props
    const { name, email, phone, message, errors } = this.state
    return (
      <div className="bg-inquiry" style={styles.container} id={id}>
        <h1 style={styles.title}>GET IN TOUCH</h1>
        <div style={styles.contentsContainer}>
          <div style={styles.userContainer}>
            <Input
              type="text"
              name="name"
              value={name}
              title={inquiry.name[lang]}
              placeholder=""
              error={errors.name}
              onChange={this.onChange}
            />
            <Input
              type="email"
              name="email"
              value={email}
              title={inquiry.email[lang]}
              placeholder=""
              error={errors.email}
              onChange={this.onChange}
            />
            <Input
              type="phone"
              name="phone"
              value={phone}
              title={inquiry.phone[lang]}
              placeholder=""
              error={errors.phone}
              onChange={this.onChange}
            />
          </div>
          <div className="form-group" style={styles.messageContainer}>
            <label>{inquiry.message[lang]}</label>
            <textarea
              rows="11"
              name="message"
              value={message}
              className="form-control rounded-1"
              onChange={this.onChange}
            />
          </div>
        </div>
        <Button
          title={inquiry.submit[lang]}
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
