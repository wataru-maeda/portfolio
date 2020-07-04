import React, { useState } from 'react'
import { PropTypes } from 'prop-types'
import { useTranslation } from 'react-i18next'
import { Element } from 'react-scroll'
import i18next from 'i18next'
import emailjs from 'emailjs-com'
import swal from 'sweetalert2'
import Input from 'components/Input'
import Textarea from 'components/Textarea'
import Button from 'components/Button'
import { styler, colors, breakpoints } from 'styles'
import { validate, tests } from 'utils/vali'
import { emailJsConfig } from 'utils/config'

const styles = styler({
  root: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    padding: '80px 60px',
    background: colors.lightGray,
    [breakpoints.phone]: {
      padding: '40px 30px',
    },
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: colors.blackGray,
    marginBottom: 30,
    [breakpoints.phone]: {
      fontSize: 24,
    },
  },
  subtitle: {
    fontSize: 20,
    fontWeight: '300',
    marginBottom: 60,
    [breakpoints.phone]: {
      fontSize: 16,
    },
  },
  container: {
    display: 'flex',
    width: '100%',
    maxWidth: 1000,
    [breakpoints.phone]: {
      flexDirection: 'column',
    },
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
  submitButton: {
    minWidth: 300,
    height: 60,
    background: 'black',
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    marginTop: 20,
  },
})

const Inquiry = () => {
  const { t } = useTranslation()

  // state
  const [inputs, setInput] = useState({})
  const [errors, setError] = useState({})
  const [isLoading, setLoading] = useState(false)

  // handler
  const handleInputChange = ({ target: { name, value } }) => {
    setInput(pre => ({ ...pre, [name]: value }))
    setError(pre => ({ ...pre, [name]: '' }))
  }
  const handleSubmit = async () => {
    // validation
    const result = validate(inputs, tests)
    if (result.isError) {
      setError(result.errors)
      return
    }

    // get emailJs keys
    const emailJsLangKey = i18next.language
    const { serviceId, templateId } = emailJsConfig[emailJsLangKey]

    // send message
    try {
      setLoading(true)
      await emailjs.send(serviceId, templateId, inputs)
      setLoading(false)
      setInput({})

      swal.fire({
        title: t('inquiry.alert.success.title'),
        text: t('inquiry.alert.success.description'),
        icon: 'success',
        confirmButtonColor: 'black',
        confirmButtonText: 'Ok',
      })
    } catch (err) {
      swal.fire({
        title: t('inquiry.alert.failed.title'),
        text: t('inquiry.alert.failed.description'),
        icon: 'error',
        confirmButtonColor: 'black',
        confirmButtonText: 'Ok',
      })
      setLoading(false)
    }
  }

  return (
    <Element name="inquiry">
      <div className={styles.root}>
        <h2 className={styles.title}>{t('inquiry.title')}</h2>
        <aside className={styles.subtitle}>{t('inquiry.subtitle')}</aside>
        <div className={styles.container}>
          <div className={styles.userInfoContainer}>
            <Input
              label={t('inquiry.name.label')}
              name="name"
              value={inputs.name}
              inputClassName={styles.input}
              onChange={handleInputChange}
              error={t(errors.name)}
              mandatory
            />
            <Input
              label={t('inquiry.email.label')}
              name="email"
              value={inputs.email}
              inputClassName={styles.input}
              onChange={handleInputChange}
              error={t(errors.email)}
              mandatory
            />
            <Input
              label={t('inquiry.phone.label')}
              name="phone"
              value={inputs.phone}
              inputClassName={styles.input}
              error={t(errors.phone)}
              onChange={handleInputChange}
            />
          </div>
          <div className={styles.userInfoContainer}>
            <Textarea
              label={t('inquiry.message.label')}
              name="message"
              value={inputs.message}
              rows={12}
              onChange={handleInputChange}
              error={t(errors.message)}
              mandatory
            />
          </div>
        </div>
        <Button
          label={t('inquiry.submit.label')}
          labelClassName={styles.submitButtonLabel}
          className={styles.submitButton}
          onClick={handleSubmit}
          isLoading={isLoading}
          disabled={isLoading}
        />
      </div>
    </Element>
  )
}

Inquiry.propTypes = {
  style: PropTypes.shape({}),
}

Inquiry.defaultProps = {
  style: {},
}

export default Inquiry
