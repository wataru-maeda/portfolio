import config  from '../utils/config'
import { sendMail } from './mailer'
import {
  LANG_EN,
  getConfirmationTitle,
  getNoticeTitle,
  getNoticeMessage,
  getConfirmationMessage,
  getErrorUnknown,
} from '../utils/const'

export const sendInquiry = async ({
  name,
  email,
  phone,
  message,
  lang = LANG_EN,
}) => {
  return (name && email && message)
    ? await sendMail({
      from: config.email,
      to: config.email,
      subject: getNoticeTitle(),
      text: getNoticeMessage(name, email, phone, message),
      lang,
    })
    : {
      success: false,
      error: getErrorUnknown(lang),
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
      from: config.email,
      to: email,
      subject: getConfirmationTitle(lang),
      text: getConfirmationMessage(name, email, phone, message, lang),
      lang,
    })
    : {
      success: false,
      error: getErrorUnknown(lang)
    }
}