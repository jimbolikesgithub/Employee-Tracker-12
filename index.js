const inquirer = require('inquirer');

// Move PORT to another file
// const PORT = process.env.PORT || 3001;
// const app = express();
// Be sure to use 'connection.db'
const connection = require('./config/connection');

// connection.db.query('')

// note: Took inspiration from my 'Profile-Generator-10' Project
const employeePrompt = () => {

    const menuPrompt = () => {
        inquirer
        .prompt([
            {
                type: 'list',
                name: 'menu',
                choices: ['View All Departments', 'View All Roles', 'View All Employees', 'Add A Department', 'Add A Role', 'Add An Employee', 'Update An Employee Role'],
                message: 'Welcome to Employee Tracker Inc!'
            }
        ])
        .then(function (choices) {
            switch(choices.menu) {
                case 'View All Departments': 
                    // Call 'View All Departments' Function
                    viewAllDepartments();
                    break;
                case 'View All Roles': 
                    // Call 'View All Roles' Function
                    viewAllRoles();
                    break;
                case 'View All Employees': 
                    // Call 'View All Employees' Function
                    viewAllEmployees();
                    break;
                case 'Add A Department': 
                    // Call 'Add A Department' Function
                    addDepartment();
                    break;
                case 'Add A Role': 
                    // Call 'Add A Role' Function
                    addRole();
                    break;
                case 'Add An Employee': 
                    // Call 'Add An Employee' Function
                    addEmployee();
                    break;
                case 'Update An Employee': 
                    // Call 'Update An Employee' Function
                    break;
            }
        })
    };
    // ^ WORKS ^

    // SHOW department TABLE
    const viewAllDepartments = () => {
        // Show Department Table HERE
        connection.connect(function(err) {
            if (err) throw err;
            connection.query("SELECT * FROM department", function (err, result, fields) {
              if (err) throw err;
              console.log(result);
            });
          });
    }
    // ^ WORKS ^

    // SHOW role TABLE
    const viewAllRoles = () => {
        // Show All Roles HERE
        connection.connect(function(err) {
            if (err) throw err;
            connection.query("SELECT * FROM role", function (err, result, fields) {
              if (err) throw err;
              console.log(result);
            });
          });
    }
    // ^ WORKS ^

    // SHOW employee TABLE
    const viewAllEmployees = () => {
        // Show All Employees HERE
        connection.connect(function(err) {
            if (err) throw err;
            connection.query("SELECT * FROM employee", function (err, result, fields) {
              if (err) throw err;
              console.log(result);
            });
          });
    }
    // ^ WORKS ^

    // ADD NEW DEPARTMENT to department TABLE
    const addDepartment = () => {
        inquirer
            .prompt([
                {
                    type: 'input',
                    name: 'addDepartment',
                    message: 'What department would you like to add?'
                }
            ])
    }
    // ^ WORKS ^
    

    // ADD NEW ROLE to role TABLE
    const addRole = () => {
        inquirer
            .prompt([
                {
                    type: 'input',
                    name: 'roleName',
                    message: 'What role would you like to make?'
                },
                {
                    type: 'input',
                    name: 'roleSalary',
                    message: 'What salary will this role have?'
                },
                {
                    type: 'input',
                    name: 'roleDepartment',
                    message: 'What role is this department for?'
                }
            ])
    }
    // ^ WORKS ^

    // ADD NEW EMPLOYEE to employee TABLE
    const addEmployee = () => {
        inquirer
            .prompt([
                {
                    type: 'input',
                    name: 'firstName',
                    message: 'First name?'
                },
                {
                    type: 'input',
                    name: 'lastName',
                    message: 'Last name?'
                },
                {
                    type: 'input',
                    name: 'employeeRole',
                    message: 'Your role?'
                },
                {
                    type: 'input',
                    name: 'employeeManager',
                    message: 'Whose your manager?'
                }
            ])
    }
    // ^ WORKS ^

    // UPDATE EMPLOYEE ROLE; updating employee table
    const updateEmployeeRole = () => {

    }

menuPrompt();
}


employeePrompt();

// SOURCES FOR .then() method function arguments: https://stackoverflow.com/questions/32384081/calling-a-async-function-inside-then ...
// ... AND https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/then
// note: Didn't know how to put a function inside of a .then() to return a promise (w/ ES6 Functions), so I Google'd it and found these ^
// SOURCE FOR 