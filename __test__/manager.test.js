// require manager.js
const { exportAllDeclaration } = require('@babel/types');
const Manager = require('../lib/manager.js');

test('should create manager object', () => {
    const manager = new Manager('Dani', '001', 'dani@email.com', '360');


    expect(manager.name).toEqual(expect.any(String));
    expect(manager.id).toEqual(expect.any(String));
    expect(manager.email).toEqual(expect.any(String));
    expect(manager.officeNumber).toEqual(expect.any(String));
});