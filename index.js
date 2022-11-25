const inquirer = require('inquirer');
const fs = require('fs');
const pageTemplate = require('./src/page-template.js');
const employee = require('./lib/employee.js');
const engineer = require('./lib/engineer.js');
const intern = require('./lib/intern.js');
const manager = require('./lib/manager.js');
const Manager = require('./lib/manager.js');
const Engineer = require('./lib/engineer.js');
const Intern = require('./lib/intern.js');

const newEmployee = [];

// Manger input & create manager 
const managerInput = function () {
return inquirer.prompt([
    {
        type: "input",
        name: "name",
        message: "Please enter the team manager's name.",
        validate: name => {
            if (name) {
                return true;
            } else {
                console.log("Please enter a name.");
                return false;
            }
        }
    },
    {
        type: "input",
        name: "id",
        message: "Please enter the manager's employee ID.",
        validate: id => {
            if (id) {
                return true;
            } else {
                console.log("Please enter an ID.");
                return false;
            }
        }
    },
    {
        type: "input",
        name: "email",
        message: "Please enter the manager's email.",
        validate: email => {
            if (email) {
                return true;
            } else {
                console.log("Please enter an email address.");
                return false;
            }
        }
    },
    {
        // Office Number for manager
        type: "input",
        name: "office",
        message: "Please enter the manager's office number.",
        validate: office => {
            if (office) {
                return true;
            } else {
                console.log("Please enter an office number.");
                return false;
            }
        }
    }
])
// Async data to create manager role then go to the team menu options
.then(managerInfo => {
    const { name, id, email, officeNumber } = managerInfo;
    const manager = new Manager(name, id, email, officeNumber);
    newEmployee.push(manager);
})
};

// Menu to add Engineer & Intern roles
const teamMenu = function () {
    return inquirer.prompt([
        {
            type: "list",
            name:"role",
            message: "Which employee would you like to add?",
            choices: ["Engineer", "Intern"]
        },
        {
            type: "input",
            name: "name",
            message: "Please enter the employee's name.",
            validate: employeeName => {
                if (employeeName) {
                    return true;
                } else {
                    console.log("Please enter a name.");
                    return false;
                }
            }
        },
        {
            type: "input",
            name: "id",
            message: "Please enter the employee's ID.",
            validate: employeeId => {
                if (employeeId) {
                    return true;
                } else {
                    console.log("Please enter an ID.");
                    return false;
                }
            }
        },
        {
            type: "input",
            name: "email",
            message: "Please enter the employee's email.",
            validate: employeeEmail => {
                if (employeeEmail) {
                    return true;
                } else {
                    console.log("Please enter an email address.");
                    return false;
                }
            }
        },
        // GitHub for Engineer
        {
            type: "input",
            name: "github",
            message: "Please enter the engineer's GitHub username.",
            when: (input) => input.role === "Engineer",
            validate: github => {
                if (github) {
                    return true;
                } else {
                    console.log("Please enter a GitHub username.");
                    return false;
                }
            }
        },
        // School for Intern
        {
            type: "input",
            name: "school",
            message: "Please enter the intern's school.",
            when: (input) => input.role === "Intern",
            validate: school => {
                if (school) {
                    return true;
                } else {
                    console.log("Please enter a school.");
                    return false;
                }
            }
        },
        {
            type: "confirm",
            name: "confirmEmployee",
            message: "Is there another employee on your team?",
            default: false
        }
    ]) 
    .then(employeeInfo => {
        let { name, id, email, role, github, school, confirmEmployee } = employeeInfo;
        let employee;

        if(role === "Engineer") {
            employee = new Engineer(name, id, email, github);
            console.log(employee);
        } else if(role === "Intern") {
            employee = new Intern(name, id, email, school);
            console.log(employee);
        }
        newEmployee.push(employee);

        if(confirmEmployee) {
            return teamMenu(newEmployee)
        } else {
            return newEmployee;
        }
    })
}; 

managerInput()
.then(teamMenu)
.then(data => {
    const HTML = pageTemplate(data)

    fs.writeFile("./src/index.html", HTML, err => {
        if (err) {
            console.log(err);
            return;
        } else {
            console.log("Your file has been created.")
        }
    })
});
