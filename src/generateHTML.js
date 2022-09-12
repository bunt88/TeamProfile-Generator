const generateManager = function (manager) {
    return `
    <div class='col-4 mt-4'>
        <div class="card h-100">
            <div class="card-header">
                <h2>${manager.name}</h2>
                <h3>Manager</h3><i class="material-icons">content_paste</i>
            </div>
            
            <div class="card-body">
                <p class="id">ID: ${manager.id}</p>
                <p class="email">Email: <a href="mailTo:${manager.email}">${manager.email}</a></p>
                < p class="office">Office Number: ${manager.officeNumber}</p>
            </div>
            
        </div>
    </div>
    `
};

const generateEngineer = function (engineer) {
    return`
    <div class="col-4 mt-4">
        <div class="card h-100">
            <div class="card-header">
                <h2>${engineer.name}</h2>
                <h3>Engineer</h3><i class="material-icons">laptop_mac</i>
            </div>

            <div class="card-body">
                <p class="id">ID: ${engineer.id}</p>
                <p class="email">Email: <a href="mailTo:${engineer.email}">${engineer.email}</a></p>
                <p class="github">Github: <a href="https://github.com/${engineer.github}">${engineer.github}</a></p>
            </div>
        </div>
    </div>`
};

const generateIntern = function (intern) {
    return`
    <div class="col-4 mt-4">
        <div class="card h-100">
            <div class="card-header">
                <h2>${intern.name}</h2>
                <h3>Intern</h3><i class="material-icons">assignment_ind</i>
            </div>
            
            <div class="card-body">
                <p class="id">ID: ${intern.id}</P>
                <p class="email">Email:<a href="mailTo:${intern.email}">${intern.email}</a></p>
                <p class+"school">School: ${intern.school}</p>
            </div>
        </div>
    </div>`
};

function generateHTML(data) {

    teamArray = [];

    for (let i = 0; i < data.length; i++) {
        const employee = data[i];
        const role = employee.getRole();

        if (role === 'Manager') {
            const managerCard = generateManager(employee);

            teamArray.push(managerCard);
        }

        if(role === 'Engineer') {
            const engineerCard = generateEngineer(employee);

            teamArray.push(engineerCard);
        }

        if(role === 'Intern') {
            const internCard = generateIntern(employee);

            teamArray.push(internCard);
        }
    }

    const employeecards = teamArray.join('');

    const generateTeam = generateTeamPage(employeeCards);
    return generateTeam;
};

function generateTeamPage(employeeCards) {

    return `
    <!DOCTYPE html>
    <html lang="en">
    
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>My Team</title>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/css/bootstrap.min.css" integrity="sha384-xOolHFLEh07PJGoPkLv1IbcEPTNtaed2xpHsD9ESMhqIYd0nLMwNLD69Npy4HI+N" crossorigin="anonymous">
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
        <link rel="stylesheet" href='style.css'>
    
        <style>
            header {
                display: flex;
                justify-content: center;
                background-color: blue;
                color: antiquewhite;
            }
    
            .card {
                border: 1px solid black;
                display: flex;
                flex-direction: column;
                flex-wrap: wrap;
                width: 250px;
                height: 300px;
                align-content: center;
                justify-content: center;
                box-shadow: 5px 5px;
            }
    
            .card .title {
                display: flex;
                flex-direction: column;
                background-color: blueviolet;
                width: 100%;
                justify-content: center;
            }
        </style>
    </head>
    
    <body>
        <header>
            <h2>My Team</h2>
        </header>
    
        <main>
            <div class="container">
                <div class="row justify-content-center" id="team-cards">
                    ${employeeCards}
                </div>
            </div>
        </main>
    
    
    
    </body>
    <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js" integrity="sha384-OgVRvuATP1z7JjHLkuOU7Xw704+h835Lr+6QL9UvYjZE3Ipu6Tp75j7Bh/kR0JKI" crossorigin="anonymous"></script>
    </html>`
};

module.exports = generateHTML;