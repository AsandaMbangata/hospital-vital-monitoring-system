const PatientRepository = require('../PatientRepository');

class InMemoryPatientRepository extends PatientRepository {
    constructor() {
        super();
        this.storage = new Map();
    }

    save(patient) {
        this.storage.set(patient.id, patient);
    }

    findById(id) {
        return this.storage.get(id);
    }

    findAll() {
        return Array.from(this.storage.values());
    }

    delete(id) {
        this.storage.delete(id);
    }
}

module.exports = InMemoryPatientRepository;
