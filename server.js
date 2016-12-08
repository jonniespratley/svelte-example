'use strict';
var express = require('express');
var serveStatic = require('serve-static');

var app = express();

app.use( '/dist', serveStatic(__dirname + '/dist'))
app.use(serveStatic(__dirname + '/public'));
app.listen(process.env.PORT || 3000);
