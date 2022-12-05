const Engineer = require('../lib/Engineer');

describe('Testing Engineer Class', () => {
    it('should be able to create instance', () => {
        //data set up
        const name = 'Christen';
        const id = 86;
        const email = 'christen@christen.com';
        const gitHub = "github.com";
        const getRole = "Engineer";
        //create case
        const engineer = new Engineer(name, id, email, gitHub, getRole);
        //make assertion
        expect(engineer.name).toBe(name);
        expect(engineer.id).toBe(id);
        expect(engineer.email).toBe(email);
        expect(engineer.github).toBe(gitHub);
        expect(engineer.getRole).toBe(getRole);
    });
});