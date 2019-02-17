const mysql = require('mysql2');

const pool = mysql.createPool({
    host: 'localhost',
    user: 'student',
    database: 'node-complete',
    password: 'student'
});

module.exports = pool.promise();