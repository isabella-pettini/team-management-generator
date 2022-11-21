// require engineer.js
const Engineer = require('../lib/engineer.js');

test('should create engineer object', () => {
    const engineer = new Engineer('Tristan', '007', 'tristan@email.com', 'tristangithub');

    expect(engineer.name).toEqual(expect.any(String));
    expect(engineer.id).toEqual(expect.any(String));
    expect(engineer.email).toEqual(expect.any(String));
    expect(engineer.github).toEqual(expect.any(String));
});