//Route for /api/burgers

const router = require("express").Router();

//Accessing the Models folder
const db = require('../../../models');

router.get("/", function (req, res) {
    db.burgers.findAll({}).then(function (burgersDB, error) {
        if (error) {
            res.sendStatus(500);
        }
        res.json(burgersDB);
    })
});

router.put("/:id", function (req, res) {
    const burgerID = req.params.id;
    let key = "";

    if (isNaN(burgerID)) {
        key = "burger_name";
        console.log("Is not an ID");
    }
    else {
        key = "id";
        console.log("Is an ID")
    }

    console.log(key, burgerID);

    db.burgers.update(req.body, {
        where: {
            [key]: burgerID
        }
    }).then(function (burgersDB, error) {
        if (error) {
            res.sendStatus(500);
        }
        res.sendStatus(200);
    });
});

router.post("/:name", function(req, res){
    const burgerName = req.params.name;

    db.burgers.create(req.body).then(function(burgersDB, error){
        if(error){
            res.sendStatus(500);
        }
        else
        {
            res.sendStatus(200);
        }
    })
});

module.exports = router;