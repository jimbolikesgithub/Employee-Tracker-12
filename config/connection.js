// Import & require 'mysql2'
const mysql = require('mysql2');

// Connect to database
const db = mysql.createConnection(
    {
        // Connect the localhost...
        host: 'localhost',
        // ...mysql username...
        user: 'root',
        // ...mysql password...
        password: 'thePowerofrice0!',
        // ...and the current database
        database: 'tracker_db'
    },
    // If the above works, this will be logged
    console.log('Connected to the tracker_db database.') 
);

module.exports = db;

// note: 'config/connection.js' Inspired by 13-ORM/01-Activities/04-Stu-Models & 12-SQL/01-Activities/28-Stu_Mini-Project