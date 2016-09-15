
This phonebook example showcases CRUD application implemented on Javascript stack using MVC pattern.

## Enchancements
Implement linter
Implement auth
Implement logging to papertrail
Mobile look
Pagination

## Database schema

var phoneSchema = new Schema({
	surname: String,
	name: String,
	middleName: String,
	city: String,
	street: String,
	dob: Date,
	phone: String
});

var citySchema = new Schema({
	name: String,
	street: [String]
});

## Api routes

Route |	HTTP Verb |	Description
--- | --- | ---
/api/v1/phones/	| GET |	Get all the phone records.
/api/v1/phones/ | POST |Create a phone record.
/api/v1/phones/:phone_id |	GET | Get a single phone record.
/api/v1/phones/:phone_id |	PUT | Update a phone record with new info.
/api/v1/phones/:phone_id |	DELETE | Delete a phone recordear.
--- | --- | ---
/api/v1/cities/	| GET |	Get all the city records.
/api/v1/cities/ | POST |Create a city record.
/api/v1/cities/:city_id |	GET | Get a single city record.

## Live demo

Live demo is aviable on heroku TODO: url here 

## Running the server

You can launch the app from the Terminal:

    $ npm start

Once the server is running, open the project in the shape of 'https://projectname-username.c9.io/'. As you enter your name, watch the Users list (on the left) update. Once you press Enter or Send, the message is shared with all connected clients.
