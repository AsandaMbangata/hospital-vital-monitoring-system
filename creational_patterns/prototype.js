class VitalPrototype {
    constructor(data) {
        this.data = data;
    }

    clone() {
        return new VitalPrototype({ ...this.data });
    }
}

module.exports = VitalPrototype;
