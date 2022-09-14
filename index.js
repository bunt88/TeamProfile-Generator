// Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateHTML = require("./src/generateHTML");
const teamArray = [];
const Engineer = require('./lib/Engineer');
const Manager = require('./lib/Manager');
const Intern = require('./lib/Intern');

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
    });
}
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
    ]).then(data => {
        const manager = new Manager(data.name, data.id, data.email, data.github)
        console.log(manager);
        teamArray.push(manager);
        console.log(teamArray);
    })    
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
        console.log(engineer);
        teamArray.push(engineer);
        console.log(teamArray);
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
    ]).then(data => {
        const intern = new Intern(data.name, data.id, data.email, data.github)
        console.log(intern);
        teamArray.push(intern);
        console.log(teamArray);
    })
};


//function to write HTML file
//const writeToFile = (fileName, data) => {
   // if (!fs.existsSync("output")) {
      //  fs.mkdirSync("output")
    //}

    //fs.writeFileSync(`./output/${generateHTML}`, data, (err) => 
  //  err ? console.log(err) : console.log("Commit Logged"))
//};

//const  newHTML= generateHTML();

// writeToFile("index.html", newHTML);

// generateHTML(teamArray)
//create function to initialize app
function init() {
    menu()   
};

//Function call to initialize app
init();