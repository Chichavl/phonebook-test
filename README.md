
This phonebook example showcases CRUD application implemented on Javascript stack using MVC pattern.

## Enchancements
- Implement linter
- Implement auth
- Implement logging to papertrail
- Mobile look
- Pagination

## Database schema

### phone collection schema

Main table to store phone book data

Name | Type | Description 
--- | --- | ---
surname | String | Surname of person
name | String | Name of person
middleName | String | Middle name of pesron
city | String | City of person
street | String | Street of person
dob | Date | Date of birth of person
phone | String | Phone of person

### city collection schema

Table to store hierarchy of all cities with streets 

Name | Type | Description 
--- | --- | ---
_id | String | City name
street | Array of Strings | Array of streets of the city


## Api routes

Route |	HTTP Verb |	Description
--- | --- | ---
/api/v1/phones/	| GET |	Get all the phone records.
/api/v1/phones/ | POST |Create a phone record.
/api/v1/phones/:phone_id |	GET | Get a single phone record.
/api/v1/phones/:phone_id |	PUT | Update a phone record with new info.
/api/v1/phones/:phone_id |	DELETE | Delete a phone record.
--- | --- | ---
/api/v1/cities/	| GET |	Get all the city records.
/api/v1/cities/ | POST |Create a city record.
--- | --- | ---
/api/v1/cities/:city_id/streets/ | GET |	Get all the streets records of paticular city.
/api/v1/cities/:city_id/streets/ | POST |Create a streets record of paticular city.

## Live demo

Live demo is aviable on [heroku](https://phonebook-test-chichavl.herokuapp.com/)
