# A simple Rest API in JavaScript using Node.js, Express, Postgres and Docker

This is a simple Rest API application built with Node.js and Express, using Postgres database for storage and Docker for containerization. The application provides basic CRUD functionality to manage data stored in the database.

## Installation

Before installing this application, ensure that you have the following dependencies installed on your system:

- Docker
- Node.js
- npm (Node Package Manager)

To install this application, perform the following steps:

1. Clone the repository
2. Navigate to the cloned directory
3. Run `npm install`

## Usage

To start the application, run the following command:

```
docker-compose up
```

This command will start the Postgres database server and the Node.js application server in separate Docker containers.

Once the server is running, you can access the API at the following URL:

```
http://localhost:3000/
```

The API provides the following endpoints:

- `GET /users`: Get a list of all users
- `GET /users/:id`: Get a single user by ID
- `POST /users`: Create a new user
- `PUT /users/:id`: Update an existing user by ID
- `DELETE /users/:id`: Delete a user by ID

## Contributing

If you wish to contribute to this project, please fork the repository and submit a pull request with your changes.

## License

This project is licensed under the [MIT License](https://opensource.org/license/mit/). See the `LICENSE` file for details.
