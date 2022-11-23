const inquirer = require('inquirer');
const fs = require('fs');
const pageTemplate = require('./src/page-template.js');
const employee = require('./lib/employee.js');
const engineer = require('./lib/engineer.js');
const intern = require('./lib/intern.js');
const manager = require('./lib/manager.js');

const newEmployee = [];


