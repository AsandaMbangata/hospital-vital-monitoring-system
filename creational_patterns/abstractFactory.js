class Button {
    render() {}
}

class WebButton extends Button {
    render() {
        return "Web Button";
    }
}

class MobileButton extends Button {
    render() {
        return "Mobile Button";
    }
}

class UIFactory {
    static create(type) {
        if (type === "web") return new WebButton();
        if (type === "mobile") return new MobileButton();
    }
}

module.exports = UIFactory;
