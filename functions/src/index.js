import * as functions from 'firebase-functions'
import cors from 'cors'
import { sendInquiry, sendConfirmation } from './inquiry'

const corsHander = cors({ origin: true })

const sendMail = functions.https.onRequest((req, res) => {

  // production env: req.body.data / localhost: req.body
  const params = req.body.data ? req.body.data : req.body

  // send inquiry form to me
  sendInquiry(params).then(retInq => {
    if (!retInq.success) 
      return corsHander(req, res, () => {
        res.status(500).send({ data: retInq })
      })
    
    // send confirmation form to user
    sendConfirmation(params).then(retConf => {
      corsHander(req, res, () => {
        retConf.success
          ? res.status(200).send({ data: { success: true } })
          : res.status(500).send({ data: retConf })
      })
    })
  })
})

export {
  sendMail 
}