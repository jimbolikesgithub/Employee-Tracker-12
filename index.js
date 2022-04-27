const inquirer = require('inquirer');

const connection = require('./config/connection');

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
                case 'Update An Employee Role': 
                    // Call 'Update An Employee' Function
                    updateEmployeeRole();
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
            connection.query("SELECT * FROM department", function (err, result) {
              if (err) throw err;
              //   console.table instead of log (built in)
              console.table(result);
            });
          });
    }
    // ^ WORKS ^

    // SHOW role TABLE
    const viewAllRoles = () => {
        // Show All Roles HERE
        connection.connect(function(err) {
            if (err) throw err;
            connection.query("SELECT * FROM role", function (err, result) {
              if (err) throw err;
            //   console.table instead of log (built in)
              console.table(result);
            });
          });
    }
    // ^ WORKS ^

    // SHOW employee TABLE
    const viewAllEmployees = () => {
        // Show All Employees HERE
        connection.connect(function(err) {
            if (err) throw err;
            connection.query("SELECT * FROM employee", function (err, result) {
              if (err) throw err;
              //   console.table instead of log (built in)
              console.table(result);
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
            .then(function(answer) {
                var query = connection.query(
                    // ? gets REPLACED 
                    "INSERT INTO department SET ?",
                    // THE INPUT
                    {
                        name: answer.addDepartment
                    },
                    // A function to, if works...
                    function(err, res) {
                        // ...prinnt the affected rows to the terminal
                        console.log(res.affectedRows + " department added!\n");
                    }
                )
                console.log(query.sql);
            })
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
            .then(function(answer) {
                var query = connection.query(
                    "INSERT INTO role SET ?",
                    {
                        title: answer.roleName,
                        salary: answer.roleSalary,
                        department_id: answer.roleDepartment
                    },
                    function(err, res) {
                        console.log(res.affectedRows + " department added!\n");
                    }
                )
                console.log(query.sql);
            })
    }
    // ^  WORKS ^

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
                    type: 'list',
                    name: 'employeeRole',
                    choices: ['1', '2', '3', '4', '5', '6', '7'],
                    message: 'Your role?'
                },
                {
                    type: 'list',
                    name: 'employeeManager',
                    choices: ['1', '2', '3', '4', '5', '6', '7'],
                    message: 'Whose your manager?'
                }
            ])
            .then(function(answer) {
                var query = connection.query(
                    "INSERT INTO employee SET ?",
                    {
                        first_name: answer.firstName,
                        last_name: answer.lastName,
                        role_id: answer.employeeRole,
                        manager_id: answer.employeeManager
                    },
                    function(err, res) {
                        console.log(res.affectedRows + " department added!\n");
                    }
                )
                console.log(query.sql);
            })
    }
    // ^ HALF DONE, CURRENTLY WORKS ^

    // UPDATE EMPLOYEE ROLE; updating employee table
    const updateEmployeeRole = () => {                                    //PROBLEM IS HERE
        function updateRole() {
            console.log("Updating role...\n")
            var query = connection.query(
                "UPDATE employee SET ? WHERE ?",
                [
                    {
                        
                    }
                ],
            )

            .prompt([
                {
                    type: 'list',
                    name: 'employeeNames'
                    choices: ,
                    message: 'Which employee would you like to update?'
                }
            ])
            console.log(query.sql);
        }
        updateRole();    
    }                                                                    //PROBLEM IS HERE

menuPrompt();
}


employeePrompt();

// SOURCES FOR .then() method function arguments: https://stackoverflow.com/questions/32384081/calling-a-async-function-inside-then ...
// ... AND https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/then
// note: Didn't know how to put a function inside of a .then() to return a promise (w/ ES6 Functions), so I Google'd it and found these ^ 
// SOURCE FOR lines 105 - 119, 144 - 156, and part of 'updateEmployeeRole' on line 207: My Tutor (4/26/2022 --> 5:00pm - 5:50pm)

// function updateRole() {
//     console.log("Updating role...\n")
//     var query = connection.query(
//         "UPDATE employee SET ? WHERE ?",
//         [
//             {
                
//             }
//         ],
//     )
//     console.log(query.sql);
// }
// updateRole();    