import nodemailer from 'nodemailer'
import config from '../utils/config'
import { LANG_EN } from '../utils/const'


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

const sendMail = async (option) => {
  try {
    mailer.sendMail(option, (err) => {
      return err
        ? { success: false, error: err.message }
        : { success: true }
    })
  } catch (err) {
    return { success: false, error: err.message }
  }
}

export const sendInquiry = async ({
  name,
  email,
  phone,
  message,
  lang = LANG_EN,
}) => {

  const subject = lang === LANG_EN
    ? '[Portfolio] Inquiry'
    : '【ポートフォリオ】問い合わせ'

  const text = lang === LANG_EN
    ? `[name]: ${name}\n[Email]: ${email}\n [Phone] ${phone}\n[Message] ${message}`
    : `[名前]: ${name}\n[メールアドレス]: ${email}\n [電話番号] ${phone}\n[メッセージ] ${message}`

  return (name && email && phone && message)
    ? await sendMail({
      from: config.email.from,
      to: config.email.from,
      subject,
      text,
    })
    : {
      success: false,
      error: 'Oops something went wrong. Please try to send the message later.'
    }
}

export const sendConfirmation = async ({
  name,
  email,
  lang = LANG_EN,
}) => {

  const subject = lang === LANG_EN
    ? 'Thank you for your inquiry!'
    : 'お問い合わせありがとうございます!'

  const text = lang === LANG_EN
    ? `Hi ${name},\n\nThank you for your message. I will review the message and get you back as soon as possible, thank you for your time.`
    : `${name}様\n\nお問い合わせ誠にありがとうございます。メッセージ確認後、折り返し連絡差し上げます。引き続きよろしくお願い致します。`

  return (name && email && phone && message)
    ? await sendMail({
      from: config.email.from,
      to: email,
      subject,
      text,
    })
    : {
      success: false,
      error: 'Oops something went wrong. Please try to send the message later.'
    }
}

