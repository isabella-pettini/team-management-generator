// require engineer.js
const Engineer = require('../lib/engineer.js');

test('should create engineer object', () => {
    const engineer = new Engineer('Tristan', '007', 'tristan@email.com', 'tristangithub');

    expect(engineer.name).toEqual(expect.any(String));
    expect(engineer.id).toEqual(expect.any(String));
    expect(engineer.email).toEqual(expect.any(String));
    expect(engineer.github).toEqual(expect.any(String));
});

// Add getName()
test('should get engineer name', () => {
    const engineer = new Engineer('Tristan', '007', 'tristan@email.com', 'tristangithub');

    expect(engineer.getName()).toBe('Tristan');
});

// Add getId()
test('should get engineer id', () => {
    const engineer = new Engineer('Tristan', '007', 'tristan@email.com', 'tristangithub');

    expect(engineer.getId()).toBe('007');
});

// Add getEmail()
test('should get engineer email', () => {
    const engineer = new Engineer('Tristan', '007', 'tristan@email.com', 'tristangithub');

    expect(engineer.getEmail()).toBe('tristan@email.com');
});

// Add getGithub() - For Engineer class
test('should get engineer github', () => {
    const engineer = new Engineer('Tristan', '007', 'tristan@email.com', 'tristangithub');

    expect(engineer.getGithub()).toBe('tristangithub');
});

// Add getRole() - override to return 'Engineer'
test('should get engineer role', () => {
    const engineer = new Engineer('Tristan', '007', 'tristan@email.com', 'tristangithub');

    expect(engineer.getRole()).toBe('Engineer');
    console.log(engineer);
});