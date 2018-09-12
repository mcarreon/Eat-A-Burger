//-----MySQL Setup-----
require('dotenv').config();
var mysql = require("mysql");

var connection = mysql.createConnection({
    host: "localhost",
    port: 3307,
    user: "root",
    password: process.env.DB_PASS,
    database: "burgers_db"
});

//-----Establish Connection-----
connection.connect(function (err) {
    if (err) {
        console.error("Error Connecting: " + err.stack);
        return;
    }
    console.log("Connected with ID " + connection.threadID);

    
});

//-----Exporting Connection-----
module.exports = connection;

