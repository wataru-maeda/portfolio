import config from '../utils/config'
import { sendMail } from './mailer'
import {
  LANG_EN,
  getConfirmationTitle,
  getNoticeTitle,
  getNoticeMessage,
  getConfirmationMessage,
  getErrorUnknow,
} from '../utils/const'

export const sendInquiry = async ({
  name,
  email,
  phone,
  message,
  lang = LANG_EN,
}) => {
  return (name && email && phone && message)
    ? await sendMail({
      from: config.email.from,
      to: config.email.from,
      subject: getNoticeTitle(),
      text: getNoticeMessage(name, email, phone, message),
      lang,
    })
    : {
      success: false,
      error: getErrorUnknow(lang),
    }
}

export const sendConfirmation = async ({
  name,
  email,
  phone,
  message,
  lang = LANG_EN,
}) => {
  return (name && email)
    ? await sendMail({
      from: config.email.from,
      to: email,
      subject: getConfirmationTitle(lang),
      text: getConfirmationMessage(name, email, phone, message, lang),
      lang,
    })
    : {
      success: false,
      error: getErrorUnknow(lang)
    }
}