const express = require('express')
const app = express()

// CORS Required
const cors = require('cors')

const port = process.env.PORT || 5000

// CORS Used in APP
app.use(cors())

app.get('/', (req, res) => {
  res.send('Hello World, This is Code Atoms Web Server!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})