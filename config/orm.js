//-----Import MySQL Connection-----
var connection = require("../config/connection.js");

// Helper function for SQL syntax.
// Let's say we want to pass 3 values into the mySQL query.
// In order to write the query, we need 3 question marks.
// The above helper function loops through and creates an array of question marks - ["?", "?", "?"] - and turns it into a string.
// ["?", "?", "?"].toString() => "?,?,?";
function printQuestionMarks(num) {
    var arr = [];

    for (var i = 0; i < num; i++) {
        arr.push("?");
    }

    return arr.toString();
}


var orm = {
    selectAll: function (callback) {
        connection.query('SELECT * FROM burgers;', function (err, data) {
            if (err) throw err;

            callback(data);
        });
    },
    insertOne: function () {},
    updateOne: function () {}
}

module.exports = orm;