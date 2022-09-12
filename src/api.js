const express = require('express')
const serverless = require('serverless-http')
const app = express()
const router = express.Router();

router.get('/', (req, res) => {
  res.send('Hello ' + req.query.name)
})

router.listen(3000, () => {
  console.log(`Example app listening on port 3000`)
})


app.use('/.netlify/functions/api', router);

module.exports = app;
module.exports.handler = serverless(app);