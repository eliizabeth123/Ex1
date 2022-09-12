const express = require('express')
const serverless = require('serverless-http')
const app = express()
const router = express.Router();

router.get('/', (req, res) => {
  res.send('Hello ' + req.query.name)
})

// router.listen(port, () => {
//   console.log(`Example app listening on port ${port}`)
// })


app.use(`/.netlify/functions/api`, router);

module.exports = app;
module.exports.handler = serverless(app);