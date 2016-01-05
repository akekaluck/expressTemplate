var express = require('express')
var app = express()

app.get('/', function (req, res) {
  res.send('Hello World !!!!!')
})

app.use('/app', express.static('app'));

app.listen(3001)
