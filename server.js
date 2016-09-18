'use strict';

var express = require('express');
var routes = require('./app/routes/index.js');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

var app = express();
require('dotenv').load();

mongoose.connect(process.env.MONGO_URI);

app.use('/controllers', express.static(process.cwd() + '/app/controllers'));
app.use('/css', express.static(process.cwd() + '/client/css'));
app.use('/js', express.static(process.cwd() + '/client/js'));
app.use('/fonts', express.static(process.cwd() + '/client/fonts'));
app.use('/css/images', express.static(process.cwd() + '/client/css/images'));
app.use('/images', express.static(process.cwd() + '/client/images'));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json())

routes(app);


app.listen(process.env.PORT || 3000, process.env.IP || "0.0.0.0", function(){
  console.log("Phonebook server started");
});
