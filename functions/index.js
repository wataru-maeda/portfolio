import * as functions from 'firebase-functions'
import express from 'express'
import morgan from 'morgan'
import bodyParser from 'body-parser'
import path from 'path'
import { sendInquiry, sendConfirmation } from './inquiry'

const app = express()

app.use(morgan('short'))
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.get('/', (req, res) => {
  res.send('ok')
})

app.post('/sendMail', async (req, res) => {
  
  // send inquiry form to me
  sendInquiry(req.body).then(retInq => {
    if (!retInq.success) 
      return res.json(retInq).send()
    
    // send confirmation form to user
    sendConfirmation(req.body).then(retConf => {
      retConf.success
        ? res.json({ success: true }).send()
        : res.json(retConf).send()
    })
  }) 
 })

exports.api = functions.https.onRequest(app);
