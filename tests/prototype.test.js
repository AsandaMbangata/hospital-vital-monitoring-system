const VitalPrototype = require('../creational_patterns/prototype');

test("should clone vital object", () => {
    const original = new VitalPrototype({ bp: 120 });
    const clone = original.clone();

    expect(clone.data.bp).toBe(120);
    expect(clone).not.toBe(original); // ensure it's a new object
});
