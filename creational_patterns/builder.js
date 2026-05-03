class VitalBuilder {
    constructor() {
        this.vital = {};
    }

    setBP(bp) {
        this.vital.bp = bp;
        return this;
    }

    setHeartRate(hr) {
        this.vital.heartRate = hr;
        return this;
    }

    build() {
        return this.vital;
    }
}

module.exports = VitalBuilder;
