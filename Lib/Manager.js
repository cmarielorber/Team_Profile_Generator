const Employee = require('../Lib/Employee')

class Manager extends Employee {
    constructor(name, id, email, officeNum, getRole) {
        super(name, id, email, officeNum, getRole);
        this.officeNum = officeNum;
        this.getRole = 'Manager';
    }

    getofficeNum() {
        return this.officeNum;
    }
}

module.exports = Manager;