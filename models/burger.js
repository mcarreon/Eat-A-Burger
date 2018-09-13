var orm = require("../config/orm.js");

var burger = {
    showAllBurger: function (callback) {
        orm.selectAll(function(data) {
            callback(data);
        });
    },
    insertBurger: function () {},
    eatOneBurger: function () {}
}

module.exports = burger;