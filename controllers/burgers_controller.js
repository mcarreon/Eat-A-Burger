var express = require("express");
var router = express.Router();
var burger = require("../models/burger.js");

router.get("/", function(req, res) {
    burger.showAllBurger(function(data) {
        var hbsObject = {
            burgers: data
        };        
        console.log(hbsObject);
        res.render("index", hbsObject);
    });
});



module.exports = router;