class VitalSign {
    constructor(bp, heartRate, temp) {
        this.bp = bp;
        this.heartRate = heartRate;
        this.temp = temp;
    }

    isAbnormal() {
        return this.heartRate > 100 || this.temp > 38;
    }
        getSummary() {
        return `BP: ${this.bp}, HR: ${this.heartRate}, Temp: ${this.temp}`;
    }
}

module.exports = VitalSign;
