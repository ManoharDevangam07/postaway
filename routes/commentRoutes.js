const express = require('express');
const { protect } = require('../middlewares/authMiddleware');
const { addComment, getCommentsByPostId, updateComment, deleteComment } = require('../controllers/commentController');
const router = express.Router();

router.route('/:id/comments')
    .post(protect, addComment)
    .get(getCommentsByPostId);

router.route('/comments/:id')
    .put(protect, updateComment)
    .delete(protect, deleteComment);

module.exports = router;
