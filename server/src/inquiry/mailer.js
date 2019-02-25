import nodemailer from 'nodemailer'
import config from '../config'

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

const mailOptions = {
  from: config.email.from,
  to: 'w.maeda.ca@gmail.com',
  subject: 'Test',
  text: 'node mailer test'
};

export const sendMail = async () => {
  try {
    mailer.sendMail(mailOptions, (error, info) => {
      if (error){
        console.log("send failed")
        console.log(error.message)
        return
      }
      console.log("send successful")
      console.log(info.messageId)
    })
  } catch (e) {
    console.log("Error", e)
  }
}
