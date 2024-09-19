const Like = require('../models/likeModel');
const ErrorResponse = require('../utils/errorResponse');

exports.toggleLike = (req, res) => {
    const likeStatus = Like.toggleLike(req.user.id, req.params.postId);
    res.status(200).json({ success: true, likeStatus });
};

exports.getLikesByPostId = (req, res) => {
    const likes = Like.getLikesByPostId(req.params.postId);
    res.status(200).json({ success: true, likes });
};
