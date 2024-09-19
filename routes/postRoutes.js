const express = require('express');
const { protect } = require('../middlewares/authMiddleware');
const { createPost, getAllPosts, getPostById, updatePost, deletePost } = require('../controllers/postController');
const upload = require('../middlewares/fileUpload');
const router = express.Router();

router.route('/')
    .post(protect, upload.single('image'), createPost)
    .get(getAllPosts);

router.route('/:id')
    .get(getPostById)
    .put(protect, updatePost)
    .delete(protect, deletePost);

module.exports = router;
