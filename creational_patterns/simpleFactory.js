const Patient = require('../src/Patient');
const Doctor = require('../src/Doctor');

class UserFactory {
    static createUser(type, id, email) {
        if (type === "patient") return new Patient(id, email);
        if (type === "doctor") return new Doctor(id, email);
    }
}

module.exports = UserFactory;
