import nodemailer from 'nodemailer'
import config from '../utils/config'
import { getErrorUnknow } from '../utils/const'

const mailer = nodemailer.createTransport({
  host: config.email.host,
  port: config.email.port,
  secure: false,
  requireTLS: true,
  auth: {
    user: config.email.auth.user,
    pass: config.email.auth.pass,
  },
})

export const sendMail = async (option) => {
  try {
    await mailer.sendMail(option)
    return {
      success: true
    }
  } catch (err) {
    return {
      success: false,
      error: getErrorUnknow(option.lang),
    }
  }
}

