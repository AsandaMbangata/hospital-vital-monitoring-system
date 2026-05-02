const User = require('./User');

class Doctor extends User {
    constructor(id, email) {
        super(id, email, "doctor");
    }

    viewPatientData(patient) {
        return patient.vitals;
    }
}

module.exports = Doctor;
