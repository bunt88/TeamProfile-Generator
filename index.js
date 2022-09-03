// Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateHTML = require("./src/generateHTML")
const teamArray = [];
const Engineer = require('./lib/Engineer')

const menu = () => {
    return inquirer.prompt([
        {
            type: 'list',
            name: 'teamMember',
            choices: ['Manager', 'Engineer', 'Intern'],
            message: 'Would you like to add a new Team Member?'
        },
    ]).then(data => {
        if (data.teamMember === 'Manager') {
            manager();
        } else if (data.teamMember === 'Engineer') {
            engineer();
        } else {
            intern();
        }
    })
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
        },
    ]).then
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
    ]).then(data => {
        const engineer = new Engineer(data.name, data.id, data.email, data.github)
        teamArray.push(engineer);
    })
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
    console.log(generateHTML())
};


// generateHTML(teamArray)
//create function to initialize app
function init() {
    menu()

};

//Function call to initialize app
init();