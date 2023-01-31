const Employee = require("./Employee");
//constructors
class Engineer extends Employee {
    //create constructor
    constructor(name, id, email, github) {
        super(name, id, email);

    }
}

//methods


module.exports = Engineer;