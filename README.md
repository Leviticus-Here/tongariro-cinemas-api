# Tongariro Cinemas API

## Setup Instructions

1. Clone the GitHub repository:
Github clone - https://github.com/Leviticus-Here/tongariro-cinemas-api.git
cd tongariro-cinemas-api

2. Run this in terminal: `npm install`
Remember to also have the Postman extension for VSCode and MongoDB downloaded as well.

3. Add an `.env` file:
PORT=5000
MONGO_URI=mongodb://localhost:27017/tongariro-cinema
JWT_SECRET=supersecretkey

4. To start the server, input this in terminal: `npm run dev`

5. With Postman downloaded, you're now able to generate New HTTP Requests from the extension.

## Endpoints

Below are the endpoints for what and where you need to input in order to craft the information needed.

### Movies
- `GET /movies` - Obtain all Movies
- URL: http://localhost:5000/movies
- Method: GET
(No headers required unless protected)

- `POST /movies`- Add a new Movie
- URL: http://localhost:5000/movies
- Method: POST
- Headers:
- Key: Authorization, Value: Bearer YOUR_JWT_TOKEN
- Key: Content-Type, Value: application/json

- Body (JSON):
{
  "title": "INSERT TITLE HERE",
  "description": "INSERT DESCRIPTION HERE",
  "genre": "INSERT GENRE HERE",
  "releaseDate": "yyyy-mm-dd",
  "showtimes": [INSERT SHOWTIMES HERE] (24HR Clock times preferred)
}

- `PUT /movies/:id`- Update movie
- URL: http://localhost:5000/movies/REPLACE_WITH_ID
- Method: PUT
- Headers:
- Key: Authorization, Value: Bearer YOUR_JWT_TOKEN
- Key: Content-Type, Value: application/json

- Body:
{
  "title": "UPDATE TITLE HERE",
  "description": "UPDATE DESCRIPTION HERE",
  "genre": "UPDATE GENRE HERE",
  "showtimes": [UPDATE SHOWTIMES HERE]
}

- `DELETE /movies/:id` - Remove a Movie
- URL: http://localhost:5000/movies/REPLACE_WITH_ID
- Method: DELETE
- Headers:
- Key: Authorization, Value: Bearer YOUR_JWT_TOKEN

### Bookings
- `GET /bookings` Obtain all Bookings
- URL: http://localhost:5000/bookings
- Method: GET
- Headers:
- Key: Authorization, Value: Bearer YOUR_JWT_TOKEN

- `POST /bookings` - Create a new Booking
- URL: http://localhost:5000/bookings
- Method: POST
- Headers:
- Key: Authorization, Value: Bearer YOUR_JWT_TOKEN
- Body (JSON):
{
  "userId": "YOUR_USER_ID",
  "movieId": "MOVIE_ID_TO_BOOK",
  "showtime": "INSERT SHOWTIME HERE",
  "seats": "INSERT SEATS NUMBER HERE"
}

- `PUT /bookings/:id` - Update a Booking
- URL: http://localhost:5000/bookings/REPLACE_WITH_BOOKING_ID
- Method: PUT
- Headers:
- Key: Authorization, Value: Bearer YOUR_JWT_TOKEN
- Key: Content-Type, Value: application/json
- Body (JSON):
{
  "seats": "UPDATE SEAT NUMBER HERE"
}

- `DELETE /bookings/:id` - Cancel a Booking
- URL: http://localhost:5000/bookings/REPLACE_WITH_BOOKING_ID
- Method: DELETE
- Headers:
- Key: Authorization, Value: Bearer YOUR_JWT_TOKEN

### Users
- `GET /users` - Obtain all Users (Admin Only)
- URL: http://localhost:5000/users
- Method: GET
- Headers:
Key: Authorization, Value: Bearer YOUR_JWT_TOKEN

- `POST /users/login` - Login with existing user
- URL: http://localhost:5000/users/login
- Method: POST
- Headers:
Key: Content-Type, Value: application/json
- Body (JSON):
{
  "email": "INSERT EMAIL HERE",
  "password": "INSERT PASSWORD HERE"
}
Upon running this code shown above, you should receive a response that looks like this:
{
  "token": "YOUR_JWT_TOKEN",
  "user": {
    "id": "USER_ID",
    "name": "NAME_HERE",
    "email": "EMAIL_HERE"
  }
}
- `POST /users` - Register a new User
- URL: http://localhost:5000/users
- Method: POST
- Headers:
Key: Content-Type, Value: application/json
- Body (JSON):
{
  "name": "INSERT NAME HERE",
  "email": "INSERT EMAIL HERE",
  "password": "INSERT PASSWORD HERE"
}
- `PUT /users/:id` - Update existing User
- URL: http://localhost:5000/users/USER_ID_HERE
- Method: PUT
- Headers:
Key: Authorization, Value: Bearer YOUR_JWT_TOKEN
Key: Content-Type, Value: application/json
- Body (JSON):
{
  "name": "UPDATE NAME HERE",
  "email": "UPDATE EMAIL HERE"
}
- `DELETE /users/:id` - Delete a User
- URL: http://localhost:5000/users/USER_ID_HERE
- Method: DELETE
- Headers:
Key: Authorization, Value: Bearer YOUR_JWT_TOKEN

## NOTES
For all protected routes (GET, PUT, DELETE), you must include the JWT from the login response in the 
Authorization header as: Key: Authorization, Value: Bearer YOUR_JWT_TOKEN

- Use the login route to get a fresh token anytime.

- If you're not using roles yet, make sure authMiddleware is only checking for a valid token (not requiring "admin" unless implemented).
