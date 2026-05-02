const UserFactory = require('../creational_patterns/simpleFactory');

test("create patient", () => {
    const user = UserFactory.createUser("patient", 1, "a@mail.com");
    expect(user.role).toBe("patient");
});
