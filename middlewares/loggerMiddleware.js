const logger = (req, res, next) => {
    if (!req.url.startsWith('/api/users')) {
        console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
        console.log('Request body:', req.body);
    }
    next();
};

module.exports = logger;
