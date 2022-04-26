const inquirer = require('inquirer');

// Move PORT to another file
// const PORT = process.env.PORT || 3001;
// const app = express();
// Be sure to use 'connection.db'
// const connection = require('./config/connection');

// note: Took inspiration from my 'Profile-Generator-10' Project
const employeePrompt = () => {

    const menuPrompt = () => {
        inquirer
        .prompt([
            {
                type: 'list',
                name: 'menu',
                choices: ['View All Departments', 'View All Roles', 'View All Emplotees', 'Add A Department', 'Add A Role', 'Add An Employee', 'Update An Employee Role'],
                message: 'Welcome to Employee Tracker Inc!'
            }
        ])
        .then(function (choices) {
            switch(choices.menu) {
                case 'View All Departments': 
                    // Call 'View All Departments' Function
                    break;
                case 'View All Roles': 
                    // Call 'View All Roles' Function
                    break;
                case 'View All Employees': 
                    // Call 'View All Employees' Function
                    break;
                case 'Add A Department': 
                    // Call 'Add A Department' Function
                    break;
                case 'Add A Role': 
                    // Call 'Add A Role' Function
                    break;
                case 'Add An Employee': 
                    // Call 'Add An Employee' Function
                    break;
                case 'Update An Employee': 
                    // Call 'Update An Employee' Function
                    break;
            }
        })
    };
    
    // SHOW department TABLE
    const viewAllDepartments = () => {
        // Show Department Table HERE
    }

    // SHOW role TABLE
    const viewAllRoles = () => {
        // Show All Roles HERE
    }

    // SHOW employee TABLE
    const viewAllEmployees = () => {

    }

    // ADD NEW DEPARTMENT to department TABLE
    const addDepartment = () => {

    }
    
    

menuPrompt();
}


employeePrompt();

// SOURCES FOR .then() method function arguments: https://stackoverflow.com/questions/32384081/calling-a-async-function-inside-then ...
// ... AND https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/then
// note: Didn't know how to put a function inside of a .then() to return a promise (w/ ES6 Functions), so I Google'd it and found these ^