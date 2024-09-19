const User = require('../models/userModel');
const jwt = require('jsonwebtoken');
const ErrorResponse = require('../utils/errorResponse');

exports.register = (req, res, next) => {
    const { name, email, password } = req.body;
    const user = User.addUser({ name, email, password });
    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: '1h' });
    res.status(201).json({ success: true, token, user });
};

exports.login = (req, res, next) => {
    const { email, password } = req.body;
    const user = User.findUserByEmail(email);

    if (!user || user.password !== password) {
        return next(new ErrorResponse('Invalid credentials', 401));
    }

    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: '1h' });
    res.status(200).json({ success: true, token, user });
};
