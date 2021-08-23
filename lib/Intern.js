// Importing Employee constructor
const Employee = require("./Employee");

// Intern constructor extends Employee constructor
class Intern extends Employee {
    constructor (name, id, email, school) {
        super (name, id, email);

        this.school = school;
    }

    getSchool() {
        return this.school;
    }

    getRole() {
        return "Intern";
    }
};

// Module to export
module.exports = Intern;