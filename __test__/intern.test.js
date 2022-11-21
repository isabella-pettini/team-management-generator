// require intern.js
const Intern = require('../lib/intern.js');

test('should create intern object', () => {
    const intern = new Intern('Alexandria', '011', 'alex@email.com', 'University of Arizona');

    expect(intern.name).toEqual(expect.any(String));
    expect(intern.id).toEqual(expect.any(String));
    expect(intern.email).toEqual(expect.any(String));
    expect(intern.school).toEqual(expect.any(String));
});

// Add getName()
test('should get intern name', () => {
    const intern = new Intern('Alexandria', '011', 'alex@email.com', 'University of Arizona');

    expect(intern.getName()).toBe('Alexandria');
});

// Add getId()
test('should get intern id', () => {
    const intern = new Intern('Alexandria', '011', 'alex@email.com', 'University of Arizona');

    expect(intern.getId()).toBe('011');
});

// Add getEmail()
test('should get intern email', () => {
    const intern = new Intern('Alexandria', '011', 'alex@email.com', 'University of Arizona');

    expect(intern.getEmail()).toBe('alex@email.com');
});

// Add getSchool() - for Intern class
test('should get intern school', () => {
    const intern = new Intern('Alexandria', '011', 'alex@email.com', 'University of Arizona');

    expect(intern.getSchool()).toBe('University of Arizona');
});

// Add getRole() - override to return 'Intern'
test('should get intern role', () => {
    const intern = new Intern('Alexandria', '011', 'alex@email.com', 'University of Arizona');

    expect(intern.getRole()).toBe('Intern');
    console.log(intern);
});