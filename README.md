# TEST_API
test api for testing tests.

## How to use the API

The API is hosted on Railway. There's no frontend so you'll need to make requests directly with a tool like Postman.

API URL: `testapi-production-6225.up.railway.app`

### Routes

All usable routes are on `/users`.

#### Create a User
GET `/users`, send `username`, `email`, `password` and `age` in JSON body.

#### Get all Users
GET `/users`

#### Get User by ID
GET `/users/<id>?username=<username>&password=<password>`

#### Update a User (age)
PATCH `/users/<id>?username=<username>&password=<password>`, send new `age` in JSON body

#### Delete a User
DELETE `/users/<id>?username=<username>&password=<password>`
