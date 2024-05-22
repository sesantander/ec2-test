const express = require('express')
const app = express()
const port = 8080;
const router = require('./pokemon/route')

app.use('/pokemon', router)

app.listen(port, () => {
  console.log(`Server Running on Port ${port}`)
})
