let comments = [];

class Comment {
    static addComment({ userId, postId, content }) {
        const comment = { id: comments.length + 1, userId, postId, content };
        comments.push(comment);
        return comment;
    }

    static getCommentsByPostId(postId) {
        return comments.filter(comment => comment.postId === parseInt(postId));
    }

    static updateComment(id, { content }) {
        const comment = comments.find(comment => comment.id === parseInt(id));
        if (comment) {
            comment.content = content;
        }
        return comment;
    }

    static deleteComment(id) {
        const commentIndex = comments.findIndex(comment => comment.id === parseInt(id));
        if (commentIndex !== -1) {
            return comments.splice(commentIndex, 1);
        }
        return null;
    }
}

module.exports = Comment;
