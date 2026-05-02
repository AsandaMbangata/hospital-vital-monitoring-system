class Database {
    constructor() {
        if (Database.instance) {
            return Database.instance;
        }
        this.connection = "Connected";
        Database.instance = this;
    }
}

module.exports = Database;
