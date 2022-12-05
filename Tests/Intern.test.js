const Intern = require('../lib/Intern');

describe('Testing Intern Class', () => {
    it('should be able to create instance', () => {
        //data set up
        const name = 'Sullivan';
        const id = 21;
        const email = 'sully@sullivan.com'
        const school = 'UCSD';
        const getRole = 'Intern';
        //create case
        const intern = new Intern(name, id, email, school, getRole);
        //make assertion
        expect(intern.name).toBe(name);
        expect(intern.id).toBe(id);
        expect(intern.email).toBe(email);
        expect(intern.school).toBe(school);
        expect(intern.getRole).toBe(getRole);
    });
});