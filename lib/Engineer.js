// Importing Employee constructor
const Employee = require("./Employee");

// Engineer constructor extends Employee constructor
class Engineer {
    constructor (name, id, email, github) {
        super (name, id, email);

        this.github = github;
    }

    getGithub() {
        return this.github;
    }

    getRole() {
        return "Engineer";
    }
};

// Module to export
module.exports = Engineer;