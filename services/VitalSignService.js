class VitalSignService {
    constructor(vitalRepository) {
        this.vitalRepository = vitalRepository;
    }

    addVitalSign(vital) {
        if (vital.temperature > 40) {
            throw new Error("Abnormal temperature detected");
        }

        this.vitalRepository.save(vital);

        return vital;
    }

    getAllVitals() {
        return this.vitalRepository.findAll();
    }
}

module.exports = VitalSignService;
