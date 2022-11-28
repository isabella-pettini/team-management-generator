const teamCards = (team) => {
// Create html card for Manager
const managerCard = (manager) => {
    
    return `
        <div class="card" style="width: 18rem;">
            <div class="card-body">
                <h5 class="card-title"> ${manager.getName()} </h5>
                <h6 class="card-subtitle mb-2 text-muted"> <i class="fa-solid fa-mug-hot"></i> ${manager.getRole()} </h6>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">ID: ${manager.getId()}</li>
                    <li class="list-group-item">Email: <a href="mailto:${manager.getEmail()}">${manager.getEmail()}</a></li>
                    <li class="list-group-item">Office Number: ${manager.getOfficeNumber()}</li>
                </ul>
            </div>
        </div>`;
};

// Create html card for Engineer
const engineerCard = (engineer) => {

    return `
        <div class="card" style="width: 18rem;">
            <div class="card-body">
                <h5 class="card-title"> ${engineer.getName()} </h5>
                <h6 class="card-subtitle mb-2 text-muted"> <i class="fa-solid fa-glasses"></i> ${engineer.getRole()} </h6>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">ID: ${engineer.getId()}</li>
                    <li class="list-group-item">Email: <a href="mailto:${engineer.getEmail()}"> ${engineer.getEmail()} </a></li>
                    <li class="list-group-item">GitHub: <a href="https://github.com/${engineer.getGithub()}">${engineer.getGithub()}</a></li>
                </ul>
            </div>
        </div>`;
};

// Create html card for Intern
const internCard = (intern) => {

    return `
        <div class="card" style="width: 18rem;">
            <div class="card-body">
                <h5 class="card-title">${intern.getName()}</h5>
                <h6 class="card-subtitle mb-2 text-muted"><i class="fa-solid fa-user-graduate"></i> ${intern.getRole()}</h6>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">ID: ${intern.getId()}</li>
                    <li class="list-group-item">Email: <a href="mailto:${intern.getEmail()}">${intern.getEmail()}</a></li>
                    <li class="list-group-item">School: ${intern.getSchool()}</li>
                </ul>
            </div>
        </div>`;
};


const html = [];

html.push(
    team
    .filter((employee) => employee.getRole() === "Manager")
    .map((manager) => managerCard(manager))
);
html.push(
    team.filter((employee) => employee.getRole() === "Engineer")
    .map((engineer) => engineerCard(engineer))
    .join("")
);
html.push(
    team
    .filter((employee) => employee.getRole() === "Intern")
    .map((intern) => internCard(intern))
    .join("")
);

return html.join("");
};

// Function to generate html page
module.exports = (team) => {
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Team Management Generator</title>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
        <script src="https://kit.fontawesome.com/d3e226856a.js"></script>
        <link rel="stylesheet" href="../dist/style.css">
    </head>
    <body>
        
        <div class="jumbotron jumbotron-fluid">
        <div class="container">
        <h1 class="display-4">Our Team</h1>
        </div>
        </div>

        <main>
        <div class="container">
        <div class="row">
        <div class="col-12 d-flex justify-content-center">

        ${teamCards(team)}

        </div>
        </div>
        </div>
        </main>

        
    </body>
    </html>
    `
};