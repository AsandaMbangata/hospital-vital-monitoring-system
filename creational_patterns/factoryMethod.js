class AlertCreator {
    createAlert() {}
}

class EmailAlert extends AlertCreator {
    createAlert() {
        return "Email Alert Created";
    }
}

class SMSAlert extends AlertCreator {
    createAlert() {
        return "SMS Alert Created";
    }
}

module.exports = { EmailAlert, SMSAlert };
