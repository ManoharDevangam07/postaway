let users = [];

class User {
    static addUser({ name, email, password }) {
        const user = { id: users.length + 1, name, email, password };
        users.push(user);
        return user;
    }

    static findUserByEmail(email) {
        return users.find(user => user.email === email);
    }

    static findUserById(id) {
        return users.find(user => user.id === id);
    }
}

module.exports = User;
