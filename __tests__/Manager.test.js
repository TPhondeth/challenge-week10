// Import Manager constructor
const Manager = require('../lib/Manager.js');

// Create Manager object
test('create a manager object', () => {
    const manager = new Manager('Tony', 28, 'phondeth@gmail.com', 8);

    expect(manager.officeNumber).toEqual(expect.any(Number));
});

test('get role of employee', () => {
    const manager = new Manager('Tony', 28, 'phondeth@gmail.com', 8);

    expect(manager.getRole()).toEqual("Manager");
})