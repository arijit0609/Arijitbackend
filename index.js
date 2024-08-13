require('dotenv').config()
const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Hello World')
})
app.get('/twitter', function (req, res) {
    res.send('Hello World twitter')
  })
  app.get('/login', function (req, res) {
    res.send('<h1>Hello World login</h1>')
  })
app.listen(process.env.PORT,()=>{
    console.log(`Example app listenning on port ${process.env.PORT}`)
})
