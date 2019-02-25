import express from 'express'
import morgan from 'morgan'
import bodyParser from 'body-parser'
import { sendMail } from './inquiry'

const port = 3001
const app = express()

app.use(morgan('short'))
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.get('/', (req, res) => {
  res.send('Hello from Rooooooooot')
})

app.get('/sendMail', async (req, res) => {
  await sendMail()
  res.json(['ok'])
})

app.listen(port, () => {
  console.log(`Server is up and listening in ${port} ...`)
})
