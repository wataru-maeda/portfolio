import express from 'express'
import morgan from 'morgan'
import bodyParser from 'body-parser'
import { sendInquiry, sendConfirmation } from './inquiry'

const port = 3001
const app = express()

app.use(morgan('short'))
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.get('/', (req, res) => {
  res.send('Hello from Rooooooooot')
})

app.post('/sendMail', async (req, res) => {
  sendInquiry(req.body).then(retInq => {
    if (!retInq.success) return res.json(retInq)
    sendConfirmation(req.body).then(retConf => {
      return retConf.success
        ? res.json({ success: true })
        : res.json(retConf)
    })
  }) 
})

app.listen(port, () => {
  console.log(`Server is up and listening in ${port} ...`)
})
