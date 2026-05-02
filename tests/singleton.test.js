const Database = require('../creational_patterns/singleton');

test("singleton instance", () => {
    const db1 = new Database();
    const db2 = new Database();
    expect(db1).toBe(db2);
});
