// require employee.js
const Employee = require('../lib/employee.js');

test('should create employee object', () => {
    const employee = new Employee('Sierra', '021', 'sierra@email.com');

    expect(employee.name).toEqual('Sierra');
    expect(employee.id).toEqual('021');
    expect(employee.email).toEqual('sierra@email.com');
});