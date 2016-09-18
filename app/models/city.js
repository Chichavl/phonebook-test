'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var citySchema = new Schema({
	_id: String,
	street: [String]
});

module.exports = mongoose.model('City', citySchema);