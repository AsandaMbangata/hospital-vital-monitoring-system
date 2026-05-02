const { EmailAlert, SMSAlert } = require('../creational_patterns/factoryMethod');

test("should create email alert", () => {
    const alert = new EmailAlert();
    expect(alert.createAlert()).toBe("Email Alert Created");
});

test("should create SMS alert", () => {
    const alert = new SMSAlert();
    expect(alert.createAlert()).toBe("SMS Alert Created");
});
