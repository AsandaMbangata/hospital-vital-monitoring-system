const InMemoryPatientRepository = require('../repositories/inmemory/InMemoryPatientRepository');
const Patient = require('../src/Patient');

describe("InMemoryPatientRepository", () => {

    let repo;

    beforeEach(() => {
        repo = new InMemoryPatientRepository();
    });

    test("should save a patient", () => {
        const patient = new Patient(1, "patient@mail.com");

        repo.save(patient);

        expect(repo.findById(1)).toBe(patient);
    });

    test("should return all patients", () => {
        const patient1 = new Patient(1, "a@mail.com");
        const patient2 = new Patient(2, "b@mail.com");

        repo.save(patient1);
        repo.save(patient2);

        expect(repo.findAll().length).toBe(2);
    });

    test("should delete patient", () => {
        const patient = new Patient(1, "patient@mail.com");

        repo.save(patient);
        repo.delete(1);

        expect(repo.findById(1)).toBeUndefined();
    });
});
