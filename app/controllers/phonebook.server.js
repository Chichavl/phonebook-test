'use strict';

var City = require('../models/city.js');
var Phone = require('../models/phone.js');

function ApiHandler () {

    this.addPhone = function (req, res) {
	    var record = new Phone({
            					"surname": req.body.surname,
                            	"name": req.body.name,
                            	"middleName": req.body.middleName,
                            	"city": req.body.city,
                            	"street": req.body.street,
                            	"dob": req.body.dob,
                            	"phone": req.body.phone
            				});
        record.save(function (err) {
            if (err) {
                res.json({status:"Failed", msg: err})
            }
            else {
                res.json({status:"Ok", msg: "Record saved!"})
            }
        })
	}
	
	this.getPhones = function(req, res) {
	    Phone.find({}, function (err, result) {
	        if (err) {
	            res.json({status:"Failed", msg: err})
	        } else {
	            res.json({status:"Ok", msg: result});
	        }
	    })
	}
	
	this.getPhone = function(req, res) {
	    Phone.find({_id: req.params.id}, function (err, result) {
	        if (err) {
	            res.json({status:"Failed", msg: err})
	        } else {
	            res.json({status:"Ok", msg: result});
	        }
	    })
	}
	
	this.updatePhone = function(req, res) {
	    Phone.findById(req.params.id, function (err, result) {
	        if (err) {
	            res.json({status:"Failed", msg: err})
	            console.log(err);
	        }
	        else {
	        	result.surname = req.body.surname;
	            result.name = req.body.name,
	            result.middleName = req.body.middleName,
	            result.city = req.body.city,
	            result.street = req.body.street,
	            result.dob = req.body.dob,
	            result.phone = req.body.phone
	            
	            console.log(result);
	            result.save(function(err) {
	                if (err) {
	                    res.json({status:"Failed", msg: err});
	                } else {
	                    res.json({status:"Ok", msg: "Phone updated!"});
	                }
	            });
	        }
	    })
	}
	
	this.removePhone = function(req, res) {
	    Phone.find({_id: req.params.id}).remove(function (err, result) {
	        if (err) {
	            res.json({status:"Failed", msg: err})
	        } else {
	            res.json({status:"Ok", msg: result});
	        }
	    })
	}

	this.getCities = function(req, res) {
	    City.find({}, function (err, result) {
	        if (err) {
	            res.json({status:"Failed", msg: err})
	        } else {
	            res.json({status:"Ok", msg: result});
	        }
	    })
	}
	
	this.getCity = function(req, res) {
	    City.find({_id: req.params.id}, function (err, result) {
	        if (err) {
	            res.json({status:"Failed", msg: err})
	        } else {
	            res.json({status:"Ok", msg: result});
	        }
	    })
	}

	this.addCity = function (req, res) {
	    var record = new City({
            					"name": req.body.name,
                            	"street": []
            				});
        record.save(function (err) {
            if (err) {
                res.json({status:"Failed", msg: err})
            }
            else {
                res.json({status:"Ok", msg: "Record saved!"})
            }
        })
	}
	
	};
module.exports = ApiHandler;
