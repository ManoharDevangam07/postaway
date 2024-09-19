const express = require('express');
const { protect } = require('../middlewares/authMiddleware');
const { toggleLike, getLikesByPostId } = require('../controllers/likeController');
const router = express.Router();

router.route('/:postId/like')
    .post(protect, toggleLike);

router.route('/:postId/likes')
    .get(getLikesByPostId);

module.exports = router;
