const Employee = require('../Lib/Employee')

class Intern extends Employee {
    constructor(name, id, email, school, getRole){
        super(name, id, email, school, getRole);
        this.school = school;
        this.getRole = 'Intern';
    }
    
    getSchool(){
        return this.school;
    }
}

module.exports = Intern;