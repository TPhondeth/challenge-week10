// Import Engineer constructor
const Engineer = require('../lib/Engineer.js');

// Create Engineer object
test('create an engineer object', () => {
    const engineer = new Engineer('Tony', 28, 'phondeth@gmail.com', 'TPhondeth');

    expect(engineer.github).toEqual(expect.any(String));
});

test('get github username', () => {
    const engineer = new Engineer('Tony', 28, 'phondeth@gmail.com', 'TPhondeth');

    expect(engineer.getGithub()).toEqual(expect.stringContaining(engineer.github.toString()));
});

test('get role of employee', () => {
    const engineer = new Engineer('Tony', 28, 'phondeth@gmail.com', 'TPhondeth');

    expect(engineer.getRole()).toEqual("Engineer");
});