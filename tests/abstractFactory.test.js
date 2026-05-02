const UIFactory = require('../creational_patterns/abstractFactory');

test("should create web button", () => {
    const button = UIFactory.create("web");
    expect(button.render()).toBe("Web Button");
});

test("should create mobile button", () => {
    const button = UIFactory.create("mobile");
    expect(button.render()).toBe("Mobile Button");
});
