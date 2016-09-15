'use strict';

var path = process.cwd();
var ApiHandler = require(path + '/app/controllers/phonebook.server.js');

module.exports = function (app) {

	var apiHandler = new ApiHandler();

	app.route('/')
		.get(function (req, res) {
			res.sendFile(path + '/client/index.html');
		});

	app.route('/api/v1/phones/')
		.post(apiHandler.addPhone);
		
	app.route('/api/v1/phones/')
		.get(apiHandler.getPhones);
	
	app.route('/api/v1/phones/:id')
		.get(apiHandler.getPhone);
    
    app.route('/api/v1/phones/:id')
		.put(apiHandler.updatePhone);
		
	app.route('/api/v1/phones/:id')
		.delete(apiHandler.removePhone);
	
	app.route('/api/v1/cities/')
		.post(apiHandler.addCity);
		
	app.route('/api/v1/cities/')
		.get(apiHandler.getCities);
	
	app.route('/api/v1/cities/:id')
		.get(apiHandler.getCity);
};
