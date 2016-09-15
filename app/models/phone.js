'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var phoneSchema = new Schema({
	surname: String,
	name: String,
	middleName: String,
	city: String,
	street: String,
	dob: Date,
	phone: String
});

module.exports = mongoose.model('Phone', phoneSchema);