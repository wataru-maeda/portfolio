import React from 'react'
import { PropTypes } from 'prop-types'
import Input from 'components/Input'
import Select from 'components/Select'
import Textarea from 'components/Textarea'
import { styler, colors } from 'styles'

const styles = styler({
  root: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    padding: '80px 60px',
    background: colors.lightGray,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: colors.blackGray,
    marginBottom: 30,
  },
  subtitle: {
    fontSize: 20,
    fontWeight: '300',
    marginBottom: 60,
  },
  container: {
    display: 'flex',
    width: '100%',
    maxWidth: 1000,
  },
  userInfoContainer: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    padding: '0 20px',
  },
  input: {
    height: 50,
  },
  textarea: {},
})

const Inquiry = () => {
  return (
    <div className={styles.root}>
      <h2 className={styles.title}>Get In Touch</h2>
      <aside className={styles.subtitle}>Connection is always valuable</aside>
      <div className={styles.container}>
        <div className={styles.userInfoContainer}>
          <Input
            label="Name"
            value=""
            inputClassName={styles.input}
            mandatory
          />
          <Input
            label="Email"
            value=""
            inputClassName={styles.input}
            mandatory
          />
          <Select label="Inquiry type" mandatory />
        </div>
        <div className={styles.userInfoContainer}>
          <Textarea label="Message" value="" rows={12} mandatory />
        </div>
      </div>
    </div>
  )
}

Inquiry.propTypes = {
  style: PropTypes.shape({}),
}

Inquiry.defaultProps = {
  style: {},
}

export default Inquiry
