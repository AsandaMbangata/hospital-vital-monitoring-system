class Alert {
    constructor(message) {
        this.message = message;
    }

    send() {
        return `Alert sent: ${this.message}`;
    }
}

module.exports = Alert;
