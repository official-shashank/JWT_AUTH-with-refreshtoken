# User Authentication System

## Description

This project implements a secure user authentication system with the following functionalities:

- User registration with username, email, and password.
- User login with email and password.
- Logout functionality to clear authentication tokens.
- Token-based authentication using JWT.
- Access to protected routes with valid JWT tokens.

## Features

- Secure password storage with bcrypt
- JSON Web Tokens (JWT) for user sessions
- Input validation and sanitization
- Error handling middleware
- Secure storage of sensitive data using environment variables

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/auth-system.git
   cd auth-system
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Create a `.env` file and add the following environment variables:

   ```
   MONGO_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret_key
   REFRESH_TOKEN_SECRET="your_refresh_token"
   PORT=3000
   ```

4. Start the application:
   ```bash
   npm start
   ```
   <!-- or can use nodemon to start as developement server for the testing purpose after installtion -->

## Endpoints

- `POST /api/auth/register` - Register a new user
- `POST /api/auth/login` - Login a user
- `POST /api/auth/logout` - Logout the  user
- `POST /api/auth/refresh-token` - refresh the token to the user
-  `POST /api/protected` - Protected Route that can be acces by the token


## Security Features

- Passwords are hashed using bcrypt before storing in the database.
- JWTs are used to manage user sessions.
- User input is validated and sanitized to prevent XSS and other attacks.
- Environment variables are used to store sensitive data securely.

## Error Handling

- Custom middleware handles errors and returns appropriate responses.

## Technologies Used

- Node.js
- Express
- MongoDB
- Mongoose
- Bcrypt
- JWT
- dotenv
- body-parser
- cookie-parser
