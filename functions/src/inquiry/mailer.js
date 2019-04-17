import * as functions from 'firebase-functions'
import nodemailer from 'nodemailer'
import config from '../utils/config'
import { getErrorUnknown } from '../utils/const'

const { gmail } = functions.config()
const user = gmail ? gmail.email : config.email
const pass = gmail ? gmail.password : config.pass

const mailer = gmail
? nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user,
      pass
    }
  })
: nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    requireTLS: true,
    auth: {
      user,
      pass,
    },
  })

export const sendMail = async (option) => {
  const { from, to, subject, text, lang } = option
  try {
    await mailer.sendMail({ from, to, subject, text })
    return {
      success: true
    }
  } catch (err) {
    return {
      success: false,
      error: getErrorUnknown(lang),
    }
  }
}

