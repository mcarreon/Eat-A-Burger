var express = require("express");
var router = express.Router();
var burger = require("../models/burger.js");

router.get("/", function(req, res) {
    burger.showAllBurger(function(data) {
        var availableBurgers = [];
        var oldBurgers = [];
        
        data.forEach(function (e) {
            if (e.devoured == false) {
                availableBurgers.push(e);
            }
            else {
                oldBurgers.push(e);
            }
        });
        
        console.log(availableBurgers);
        console.log(oldBurgers);

        var hbsObject = {
            allBurgers: data,
            availableBurgers: availableBurgers,
            oldBurgers: oldBurgers
        };        
        //console.log(hbsObject);
        res.render("index", hbsObject);
    });
});



module.exports = router;