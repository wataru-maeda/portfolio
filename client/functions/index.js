import * as functions from 'firebase-functions'
import express from 'express'

const app = express();

app.get('/timestamp', (request, response) => {
  response.send(`${Date.now()}`);
})

exports.api = functions.https.onRequest(app);
