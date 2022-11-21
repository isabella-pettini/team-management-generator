// require manager.js
const Manager = require('../lib/manager.js');

test('should create manager object', () => {
    const manager = new Manager('Dani', '001', 'dani@email.com', '360');

    expect(manager.name).toEqual(expect.any(String));
    expect(manager.id).toEqual(expect.any(String));
    expect(manager.email).toEqual(expect.any(String));
    expect(manager.officeNumber).toEqual(expect.any(String));
});

// Add getName()
test('should get manager name', () => {
    const manager = new Manager('Dani', '001', 'dani@email.com', '360');

    expect(manager.getName()).toBe('Dani');
}); 

// Add getId()
test('should get manager id', () => {
    const manager = new Manager('Dani', '001', 'dani@email.com', '360');

    expect(manager.getId()).toBe('001');
});

// Add getEmail()
test('should get manager email', () => {
    const manager = new Manager('Dani', '001', 'dani@email.com', '360');

    expect(manager.getEmail()).toBe('dani@email.com');
});

// Add getRole() - override to return 'Manager'
test('should get manager role', () => {
    const manager = new Manager('Dani', '001', 'dani@email.com', '360');

    expect(manager.getRole()).toBe('Manager');
    console.log(manager);
});