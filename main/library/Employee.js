const Employee = require("./Employee");
//constructors
class Engineer extends Employee {
    //create constructor
    constructor(name, id, email, github) {
        super(name, id, email);

    }
}

//create methods

module.exports = Employee;