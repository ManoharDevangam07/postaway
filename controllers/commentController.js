const Comment = require('../models/commentModel');
const ErrorResponse = require('../utils/errorResponse');

exports.addComment = (req, res) => {
    const { content } = req.body;
    const comment = Comment.addComment({ userId: req.user.id, postId: req.params.id, content });
    res.status(201).json({ success: true, comment });
};

exports.getCommentsByPostId = (req, res, next) => {
    const comments = Comment.getCommentsByPostId(req.params.id);
    res.status(200).json({ success: true, comments });
};

exports.updateComment = (req, res, next) => {
    const updatedComment = Comment.updateComment(req.params.id, req.body);
    if (!updatedComment) {
        return next(new ErrorResponse('Comment not found', 404));
    }
    res.status(200).json({ success: true, comment: updatedComment });
};

exports.deleteComment = (req, res, next) => {
    const deletedComment = Comment.deleteComment(req.params.id);
    if (!deletedComment) {
        return next(new ErrorResponse('Comment not found', 404));
    }
    res.status(200).json({ success: true, message: 'Comment deleted' });
};
