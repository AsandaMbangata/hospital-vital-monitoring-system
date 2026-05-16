const PatientService = require('../../services/PatientService');

describe("PatientService", () => {

    test("should create patient", () => {

        const mockRepo = {
            save: jest.fn()
        };

        const service = new PatientService(mockRepo);

        const patient = {
            id: 1,
            email: "patient@mail.com"
        };

        const result = service.createPatient(patient);

        expect(result).toEqual(patient);
    });

});
