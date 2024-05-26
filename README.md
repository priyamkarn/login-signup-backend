# Login and Signup Backend

This project provides backend functionality for user authentication including signup, login, and logout.

## Features

- **Signup**: Users can create a new account by providing a unique username, email, and password. Passwords are securely hashed before being stored in the database.
- **Login**: Registered users can log in using their email and password. Passwords are compared with the hashed password stored in the database for authentication.
- **Logout**: Logged-in users can log out from the system, which clears their authentication token.

## Technologies Used

- **Node.js**: Server-side JavaScript runtime environment.
- **Express.js**: Web application framework for Node.js, used for handling HTTP requests and routes.
- **MongoDB**: NoSQL database used for storing user data.
- **Mongoose**: MongoDB object modeling tool designed to work in an asynchronous environment.
- **bcrypt**: Library for hashing passwords.
- **jsonwebtoken (JWT)**: JSON Web Tokens for user authentication.

## Setup Instructions

1. Clone the repository: `git clone <repository-url>`
2. Install dependencies: `npm install`

3. Start the server: `npm start`
4. The server will start running at `http://localhost:4000`.

## API Endpoints

- `POST /user/signup`: Register a new user.
- `POST /user/login`: Authenticate and log in a user.
- `POST /user/logout`: Log out the currently authenticated user.
