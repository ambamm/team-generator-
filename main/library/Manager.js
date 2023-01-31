const Manager = require("./Employee");
//constructors
class Manager extends Manager {
    //create constructor
    constructor(name, id, email, github) {
        super(name, id, email);

    }
}

//modules
module.exports = Manager;