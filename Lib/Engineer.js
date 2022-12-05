const Employee = require('../Lib/Employee')

class Engineer extends Employee {
    constructor(name, id, email, gitHub, getRole){
        super(name, id, email);
        this.gitHub = gitHub;
        this.getRole = 'Engineer';
    }
    
    getGitHub(){
        return this.gitHub;
    }
}

module.exports = Engineer;