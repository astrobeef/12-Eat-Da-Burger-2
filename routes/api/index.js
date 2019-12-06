//Route for /api

const router = require("express").Router();

//Accessing the Models folder

router.use("/burgers", require("./burgers"));

//Get route

module.exports = router;