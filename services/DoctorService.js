class DoctorService {
    constructor(doctorRepository) {
        this.doctorRepository = doctorRepository;
    }

    createDoctor(doctor) {
        this.doctorRepository.save(doctor);

        return doctor;
    }

    getAllDoctors() {
        return this.doctorRepository.findAll();
    }
}

module.exports = DoctorService;
