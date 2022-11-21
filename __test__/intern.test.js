// require intern.js
const Intern = require('../lib/intern.js');

test('should create intern object', () => {
    const intern = new Intern('Alex', '011', 'alex@email.com', 'University of Arizona');

    expect(intern.name).toEqual(expect.any(String));
    expect(intern.id).toEqual(expect.any(String));
    expect(intern.email).toEqual(expect.any(String));
    expect(intern.school).toEqual(expect.any(String));
});