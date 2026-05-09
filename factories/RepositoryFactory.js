const InMemoryPatientRepository = require('../repositories/inmemory/InMemoryPatientRepository');

class RepositoryFactory {
    static getPatientRepository(type) {
        switch(type) {
            case "MEMORY":
                return new InMemoryPatientRepository();

            default:
                throw new Error("Invalid repository type");
        }
    }
}

module.exports = RepositoryFactory;
