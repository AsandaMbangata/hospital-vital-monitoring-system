const VitalBuilder = require('../creational_patterns/builder');

test("build vital", () => {
    const vital = new VitalBuilder().setBP(120).setHeartRate(80).build();
    expect(vital.bp).toBe(120);
});
