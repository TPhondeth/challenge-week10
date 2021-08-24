// External packages needed for application
const fs = require('fs');
const inquirer = require('inquirer');

// Internal Modules
const Employee = require('./lib/Employee');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const templateHTML = require('./src/page-template');
const teamArray = [];

// Array of questions
const promptManager = () => {
    return inquirer.prompt([{
                type: 'input',
                name: 'name',
                message: 'Who is the team manager?',
                validate: nameInput => {
                    if (nameInput) {
                        return true;
                    } else {
                        console.log("Please enter the manager's name!");
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'id',
                message: 'What is the ID of the team manager?',
                validate: idInput => {
                    if (idInput) {
                        return true;
                    } else {
                        console.log("Please enter the manager's ID!");
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'email',
                message: "Please enter the manager's email."
            },
            {
                type: 'input',
                name: 'officeNumber',
                message: "Please enter the manager's office number."
            }
        ])
        .then(managerInput => {
            const {
                name,
                id,
                email,
                officeNumber
            } = managerInput;
            const manager = new Manager(name, id, email, officeNumber);

            teamArray.push(manager);
            console.log(manager);
        })
};

const promptEmployee = () => {
    return inquirer.prompt([{
                type: 'list',
                name: 'role',
                message: "What is the employee's role?",
                choices: ['Engineer', 'Intern']
            },
            {
                type: 'input',
                name: 'name',
                message: "What is the employee's name?"
            },
            {
                type: 'input',
                name: 'id',
                message: "What is the employee's ID number?"
            },
            {
                type: 'input',
                name: 'email',
                message: "What is the employee's email?"
            },
            {
                type: 'input',
                name: 'github',
                message: "Please enter the employee's Github username.",
                when: (input) => input.role === "Engineer"
            },
            {
                type: 'input',
                name: 'school',
                message: "Where does the intern go to school?",
                when: (input) => input.role === "Intern"
            },
            {
                type: 'confirm',
                name: 'confirmEmployee',
                message: "Are there any additional employees to add?",
                default: false
            }
        ])
        .then(employeeInput => {
            let {
                role,
                name,
                id,
                email,
                github,
                school,
                confirmEmployee
            } = employeeInput;
            let employee;

            if (role === "Engineer") {
                employee = new Engineer(name, id, email, github);
                console.log(employee);

            } else if (role === "Intern") {
                employee = new Intern(name, id, email, school);
                console.log(employee);
            }

            teamArray.push(employee);

            if (confirmEmployee) {
                return promptEmployee(teamArray);
            } else {
                return teamArray;
            }
        })
};

// Function to write index.html file
function writeToFile(data) {
    fs.writeFile('./dist/index.html', data, (err) => {
        if (err) throw err;
        console.log('Success! Your team profile has been created! Please check out index.html!');
    });
};

promptManager()
    .then(promptEmployee)
    .then(teamArray => {
        return templateHTML(teamArray);
    })
    .then(pageHTML => {
        return writeToFile(pageHTML);
    })
    .catch(err => {
        console.log(err);
    }); 