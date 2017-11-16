var path = require('path');
var express = require('express');
var app = express();
var http = require('http');
var auth = require('./auth');


// ROUTES FOR OUR API
// =============================================================================
var router = express.Router();              // get an instance of the express Router

var staticPath = path.join(__dirname, '/');


app.use(auth);


app.use(express.static(__dirname + "/"));
app.use('/', router);

app.listen(process.env.PORT || 8081, function() {
  console.log('listening');
});
