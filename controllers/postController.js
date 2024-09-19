const Post = require('../models/postModel');
const ErrorResponse = require('../utils/errorResponse');

exports.createPost = (req, res, next) => {
    const { caption, imageUrl } = req.body;
    const userId = req.user.id;
    const post = Post.addPost({ userId, caption, imageUrl });
    res.status(201).json({ success: true, post });
};

exports.getAllPosts = (req, res) => {
    const posts = Post.getAllPosts();
    res.status(200).json({ success: true, posts });
};

exports.getPostById = (req, res, next) => {
    const post = Post.getPostById(req.params.id);
    if (!post) {
        return next(new ErrorResponse('Post not found', 404));
    }
    res.status(200).json({ success: true, post });
};

exports.updatePost = (req, res, next) => {
    const updatedPost = Post.updatePost(req.params.id, req.body);
    if (!updatedPost) {
        return next(new ErrorResponse('Post not found', 404));
    }
    res.status(200).json({ success: true, post: updatedPost });
};

exports.deletePost = (req, res, next) => {
    const deletedPost = Post.deletePost(req.params.id);
    if (!deletedPost) {
        return next(new ErrorResponse('Post not found', 404));
    }
    res.status(200).json({ success: true, message: 'Post deleted' });
};
