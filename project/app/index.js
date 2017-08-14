var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send('Hello World!Welcome to hyting’s websidte!');
});

app.listen(3001, function () {
  console.log('Example app listening on port 3001!');
});