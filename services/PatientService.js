class PatientService {
    constructor(repository) {
        this.repository = repository;
    }

    createPatient(patient) {
        return this.repository.save(patient);
    }

    getAllPatients() {
        return this.repository.findAll();
    }

        getPatientById(id) {
        return this.repository.findById(id);
    }

    updatePatient(id, updatedPatient) {
        return this.repository.update(id, updatedPatient);
    }

    deletePatient(id) {
        return this.repository.delete(id);
    }
    
}

module.exports = PatientService;
