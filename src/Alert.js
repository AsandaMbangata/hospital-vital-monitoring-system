class Alert {
    constructor(message, type = "general") {
        this.message = message;
        this.type = type;
    }

    send() {
        return `Alert (${this.type}): ${this.message}`;
    }
}

module.exports = Alert;
