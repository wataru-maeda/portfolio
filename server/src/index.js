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
  res.send('/')
})

app.post('/sendMail', async (req, res) => {

  console.log('[######] come!!')
  
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

app.listen(port, () => {
  console.log(`Server is up and listening in ${port} ...`)
})
