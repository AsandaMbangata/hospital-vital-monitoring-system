const User = require('./User');

class Patient extends User {
    constructor(id, email) {
        super(id, email, "patient");
        this.vitals = [];
    }

    logVital(vital) {
        this.vitals.push(vital);
    }

        getVitals() {
        return this.vitals;
    }
}

module.exports = Patient;
