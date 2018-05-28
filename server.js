const express = require('express')
const path = require('path')

const app = express()
const host = process.env.HOST || '127.0.0.1'
const port = process.env.PORT || 3000

// app.set('port', port)

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '/dist/index.html'))
})

app.get('/service-worker.js', (req, res) => {
  res.sendFile(path.join(__dirname, '/dist/service-worker.js'))
})

app.use('/static', express.static(path.join(__dirname, '/dist/static')))

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '/dist/index.html'))
})

// Listen the server
app.listen(port)
console.log('Server listening on ' + host + ':' + port) // eslint-disable-line no-console
