class PatientService {
    constructor(repository) {
        this.repository = repository;
    }

    getAllPatients() {
        return this.repository.findAll();
    }
}

module.exports = PatientService;
