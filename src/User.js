class User {
    constructor(id, email, role) {
        this.id = id;
        this.email = email;
        this.role = role;
    }
        getEmail() {
        return this.email;
    }

    getRole() {
        return this.role;
    }

    login() {
        return `${this.email} logged in`;
    }
}

module.exports = User;
