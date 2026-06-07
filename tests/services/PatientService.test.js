const PatientService = require('../../services/PatientService');

describe("PatientService", () => {

    test("should create patient", () => {

        const mockRepo = {
            save: jest.fn((patient) => patient)
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

test("should return all patients", () => {
    const mockRepo = {
        findAll: jest.fn().mockReturnValue([
            { id: 1 },
            { id: 2 }
        ])
    };

    const service = new PatientService(mockRepo);

    const result = service.getAllPatients();

    expect(mockRepo.findAll).toHaveBeenCalled();
    expect(result.length).toBe(2);
});

test("should get patient by id", () => {
    const mockRepo = {
        findById: jest.fn().mockReturnValue({ id: 1 })
    };

    const service = new PatientService(mockRepo);

    const result = service.getPatientById(1);

    expect(mockRepo.findById).toHaveBeenCalledWith(1);
    expect(result).toEqual({ id: 1 });
});

test("should update patient", () => {
    const mockRepo = {
        update: jest.fn().mockReturnValue({ id: 1, email: "updated@mail.com" })
    };

    const service = new PatientService(mockRepo);

    const result = service.updatePatient(1, { email: "updated@mail.com" });

    expect(mockRepo.update).toHaveBeenCalledWith(1, { email: "updated@mail.com" });
    expect(result.email).toBe("updated@mail.com");
});

test("should delete patient", () => {
    const mockRepo = {
        delete: jest.fn().mockReturnValue(true)
    };

    const service = new PatientService(mockRepo);

    const result = service.deletePatient(1);

    expect(mockRepo.delete).toHaveBeenCalledWith(1);
    expect(result).toBe(true);
});

test("should return null if patient not found", () => {
    const mockRepo = {
        findById: jest.fn().mockReturnValue(null)
    };

    const service = new PatientService(mockRepo);

    const result = service.getPatientById(999);

    expect(result).toBeNull();
});
