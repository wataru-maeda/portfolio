import * as functions from 'firebase-functions'
import express from 'express'
import morgan from 'morgan'
import bodyParser from 'body-parser'
import cors from 'cors'
import { sendInquiry, sendConfirmation } from './inquiry'

const app = express()
const corsFn = cors({ origin: true })

app.use(morgan('short'))
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.get('/', (req, res) => {
  corsFn(req, res, () => {
    res.send('port listening...')
  })
})

app.post('/sendMail', async (req, res) => {
  
  // send inquiry form to me
  sendInquiry(req.body).then(retInq => {
    if (!retInq.success) 
      return corsFn(req, res, () => {
        res.status(500).json(retInq).send()
      })
    
    // send confirmation form to user
    sendConfirmation(req.body).then(retConf => {
      corsFn(req, res, () => {
        retConf.success
          ? res.status(200).json({ success: true }).send()
          : res.status(500).json(retConf).send()
      })
    })
  }) 
 })

exports.api = functions.https.onRequest(app);
