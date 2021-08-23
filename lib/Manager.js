// Importing Employee constructor
const Employee = require("./Employee");

// Manager constructor extends Employee constructor
class Manager extends Employee {
    constructor (name, id, email, officeNumber) {
        super (name, id, email);

        this.officeNumber = officeNumber;
    }

    getRole() {
        return "Manager";
    }
};

// Module to export
module.exports = Manager;