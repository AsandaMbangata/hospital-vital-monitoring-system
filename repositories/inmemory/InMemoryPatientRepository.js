const PatientRepository = require('../PatientRepository');

class InMemoryPatientRepository extends PatientRepository {
    constructor() {
        super();
        this.storage = new Map();
    }

    save(patient) {
        this.storage.set(patient.id, patient);
        return patient;
    }

    findById(id) {
        return this.storage.get(id);
    }

    findAll() {
        return Array.from(this.storage.values());
    }
    
        update(id, updatedPatient) {
        this.storage.set(id, updatedPatient);
        return updatedPatient;
    }

    delete(id) {
        this.storage.delete(id);
    }
}

module.exports = InMemoryPatientRepository;
