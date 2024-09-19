let posts = [];

class Post {
    static addPost({ userId, caption, imageUrl }) {
        const post = { id: posts.length + 1, userId, caption, imageUrl };
        posts.push(post);
        return post;
    }

    static getAllPosts() {
        return posts;
    }

    static getPostById(id) {
        return posts.find(post => post.id === parseInt(id));
    }

    static updatePost(id, { caption, imageUrl }) {
        const post = posts.find(post => post.id === parseInt(id));
        if (post) {
            post.caption = caption || post.caption;
            post.imageUrl = imageUrl || post.imageUrl;
        }
        return post;
    }

    static deletePost(id) {
        const postIndex = posts.findIndex(post => post.id === parseInt(id));
        if (postIndex !== -1) {
            return posts.splice(postIndex, 1);
        }
        return null;
    }
}

module.exports = Post;
