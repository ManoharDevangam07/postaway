const ErrorResponse = require('../utils/errorResponse');

const errorHandler = (err, req, res, next) => {
    let error = { ...err };
    error.message = err.message;

    // Set default status code
    error.statusCode = err.statusCode || 500;

    res.status(error.statusCode).json({
        success: false,
        error: error.message || 'Server Error'
    });
};

module.exports = errorHandler;
