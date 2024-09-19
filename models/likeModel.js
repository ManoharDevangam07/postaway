let likes = [];

class Like {
    static toggleLike(userId, postId) {
        const likeIndex = likes.findIndex(like => like.userId === userId && like.postId === parseInt(postId));
        if (likeIndex !== -1) {
            likes.splice(likeIndex, 1); // Remove like if exists
            return 'unliked';
        } else {
            likes.push({ userId, postId: parseInt(postId) });
            return 'liked';
        }
    }

    static getLikesByPostId(postId) {
        return likes.filter(like => like.postId === parseInt(postId)).length;
    }
}

module.exports = Like;
