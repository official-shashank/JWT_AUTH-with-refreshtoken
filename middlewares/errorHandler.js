
const { createError } = require("http-errors");

// Error handling middleware
function errorHandler(err, req, res, next) {
  console.error(err);

  // Default error status code
  let statusCode = 500;

  let message = "Internal Server Error";

  // Check if it's a known HTTP error
  if (err instanceof createError.HttpError) {
    statusCode = err.statusCode;
    message = err.message;
  }

  // Send error response
  res.status(statusCode).json({
    error: true,
    message: message,
    // Optionally, we can include additional details like stack trace
    stack: process.env.NODE_ENV === "production" ? "🔒" : err.stack,
  });
}

module.exports = errorHandler;
