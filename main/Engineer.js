const Employee = require("./Employee");

class Engineer extends Employee {
    //create constructor
    constructor(name, id, email, github) {
        super(name, id, email);

    }
}

//methods


module.exports = Employee;