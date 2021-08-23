// Import Employee constructor
const Employee = require('../lib/Employee.js');

// Create Employee object
test('create an employee object', () => {
    const employee = new Employee('Tony', 28, 'phondeth@gmail.com');

    expect(employee.name).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
});

test('get employee name', () => {
    const employee = new Employee('Tony', 28, 'phondeth@gmail.com');

    expect(employee.getName()).toEqual(expect.any(String));
});

test('get employee ID', () => {
    const employee = new Employee('Tony', 28, 'phondeth@gmail.com');

    expect(employee.getId()).toEqual(expect.any(Number));
});

test('get employee email', () => {
    const employee = new Employee('Tony', 28, 'phondeth@gmail.com');

    expect(employee.getEmail()).toEqual(expect.stringContaining(employee.email.toString()));
});

test('get role of employee', () => {
    const employee = new Employee('Tony', 28, 'phondeth@gmail.com');

    expect(employee.getRole()).toEqual("Employee");
});
