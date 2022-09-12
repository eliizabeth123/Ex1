const express = require('express')
const serverless = require('serverless-http')
const app = express()

app.get('/.netlify/functions/api', (req, res) => {
  res.send('Hello ' + req.query.name)
})


app.listen(3000, () => {
  console.log(`Example app listening on port 3000`)
})

module.exports = app;
module.exports.handler = serverless(app);