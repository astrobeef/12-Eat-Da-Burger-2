//Route for main

const router = require("express").Router();

//Accessing the Models folder
const db = require('../models');

router.use("/api", require("./api"));

//Get route
router.get("/", function(req, res){
    db.burgers.findAll({}).then(function(burgersDB, error){
        if(error){
            res.sendStatus(500);
        }

        const burgersObj = {
            burgers: burgersDB
        }
        
        res.render("index", burgersObj);
    })
});

module.exports = router;