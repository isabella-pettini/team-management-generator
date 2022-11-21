// require employee.js
const Employee = require('../lib/employee.js');

test('should create employee object', () => {
    const employee = new Employee('Sierra', '021', 'sierra@email.com');

    expect(employee.name).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(String));
    expect(employee.email).toEqual(expect.any(String));
});

// Add getName()
test("should get employee name", () => {
    const employee = new Employee('Sierra', '021', 'sierra@email.com'); 

    expect(employee.getName()).toBe('Sierra');
});

// Add getId()
test("should get employee id", () => {
    const employee = new Employee('Sierra', '021', 'sierra@email.com');

    expect(employee.getId()).toBe('021');
});

// Add getEmail()
test("should get employee email", () => {
    const employee = new Employee('Sierra', '021', 'sierra@email.com');

    expect(employee.getEmail()).toBe('sierra@email.com');
});

// Add getRole()
test("should get employee role", () => {
    const employee = new Employee('Sierra', '021', 'sierra@email.com');

    expect(employee.getRole()).toBe('Employee');
    console.log(employee);
});
