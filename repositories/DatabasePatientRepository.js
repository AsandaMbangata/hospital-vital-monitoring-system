class DatabasePatientRepository {
    save(patient) {
        console.log("Saving patient to database...");
    }

    findById(id) {
        console.log("Finding patient in database...");
    }

    findAll() {
        console.log("Fetching all patients...");
    }

    delete(id) {
        console.log("Deleting patient...");
    }
}

module.exports = DatabasePatientRepository;
