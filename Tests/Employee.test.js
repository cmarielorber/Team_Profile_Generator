const Employee = require('../lib/Employee');

describe('Testing Employee Class', () => {
    it('should be able to create instance', () => {
        //data set up
        const name = 'Ana';
        const id = 77;
        const email = 'ana@ana.com'
        const getRole = 'Employee';
        //create case
        const employee = new Employee(name, id, email, getRole);
        //make assertion
        expect(employee.name).toBe(name);
        expect(employee.id).toBe(id);
        expect(employee.email).toBe(email);
        expect(employee.getRole()).toBe(getRole);
    });
});