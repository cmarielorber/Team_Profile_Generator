const Manager = require('../lib/Manager');

describe('Testing Manager Class', () => {
    it('should be able to create instance', () => {
        //data set up
        const name = 'PestoPie';
        const id = 11;
        const email = 'pesto@pestopie.com'
        const officeNum = '2'
        const getRole = 'Manager'
        //create case
        const manager = new Manager(name, id, email, officeNum, getRole);
        //make assertion
        expect(manager.name).toBe(name);
        expect(manager.id).toBe(id);
        expect(manager.email).toBe(email);
        expect(manager.officeNum).toBe(officeNum);
        expect(manager.getRole).toBe(getRole);
    });
});