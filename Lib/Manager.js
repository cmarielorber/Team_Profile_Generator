const Employee = require('../Lib/Employee')

class Manager extends Employee {
    constructor(name, id, email, officeNum) {
        super(name, id, email, officeNum);
        this.officeNum = officeNum;
    }

    getofficeNum() {
        return this.officeNum;
    }
     getRole(){
        return "Manager";
    }
}

module.exports = Manager;