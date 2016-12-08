'use strict';
const path = require('path');
const express = require('express');
const serveStatic = require('serve-static');
const PouchDB = require('pouchdb');
const app = express();

const dataPath = path.resolve(__dirname, './db_/')

var TempPouchDB = PouchDB.defaults({prefix: dataPath});

app.use('/db', require('express-pouchdb')(TempPouchDB));

app.use( '/dist', serveStatic(__dirname + '/dist'))
app.use(serveStatic(__dirname + '/public'));
app.listen(process.env.PORT || 3000);
