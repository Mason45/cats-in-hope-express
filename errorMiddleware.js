// errorMiddleware.js
const errorHandler = (err, req, res, next) => {
  console.error(err); // Log the error for debugging

  // Set the response status code
  const statusCode = err.status || 500;

  // Send a JSON response
  res.status(statusCode).json({
    message: err.message || 'Internal Server Error',
    // Optionally include stack trace in development mode
    ...(process.env.NODE_ENV === 'development' && { stack: err.stack }),
  });
};

module.exports = errorHandler;