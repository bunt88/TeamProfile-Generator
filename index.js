// Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');


const menu = () => {
    return inquirer.prompt([
        {
            type: 'list',
            name: 'teamMember',
            choices: ['Manager', 'Engineer', 'Intern'],
            message: 'Would you like to add a new Team Member?'
        },
    ]);
};

// Managers questions for user input
const manager = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'Name',
            message: 'Enter Managers Name'
        },
        {
            type: 'input',
            name: 'id',
            message: 'Enter Employee id'
        },
        {
            type: 'input',
            name: 'email',
            message: 'Enter Email'
        },
        {
            type: 'input',
            name: 'github',
            message: 'Enter Github Username'
        }
    ]);
};

// Engineers questions for user input
const engineer = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'Name',
            message: 'Enter Engineers Name'
        },
        {
            type: 'input',
            name: 'id',
            message: 'Enter Employee id'
        },
        {
            type: 'input',
            name: 'email',
            message: 'Enter Email'
        },
        {
            type: 'input',
            name: 'github',
            message: 'Enter Github Username'
        }
    ]);
};

// Intern questions for user input
const intern = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'Name',
            message: 'Enter Interns Name'
        },
        {
            type: 'input',
            name: 'id',
            message: 'Enter Employee id'
        },
        {
            type: 'input',
            name: 'email',
            message: 'Enter Email'
        },
        {
            type: 'input',
            name: 'school',
            message: 'Enter School Name'
        }
    ]);
};


//function to write HTML file

function writeToFile(data) {
    return ``
}

//create function to initialize app
function init() {
    menu()

};

//Function call to initialize app
init();