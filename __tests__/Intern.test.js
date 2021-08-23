// Import Intern constructor
const Intern = require('../lib/Intern.js');

// Create Intern object
test('create an intern object', () => {
    const intern = new Intern('Tony', 28, 'phondeth@gmail.com', 'UofT');

    expect(intern.school).toEqual(expect.any(String));
});

test('get intern school', () => {
    const intern = new Intern('Tony', 28, 'phondeth@gmail.com', 'UofT');

    expect(intern.getSchool()).toEqual(expect.stringContaining(intern.school.toString()));
});

test('get role of employee', () => {
    const intern = new Intern('Tony', 28, 'phondeth@gmail.com', 'UofT');

    expect(intern.getRole()).toEqual("Intern");
});