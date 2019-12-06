const express = require("express");

const exphbs = require("express-handlebars");

const PORT = process.env.PORT || 4000;

const db = require("./models");

const app = express();

//Middleware

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static("public"));

//Handlebars

app.engine(
    "handlebars",
    exphbs({
        defaultLayout: "main"
    })
);

app.set("view engine", "handlebars");

//Routes
app.use(require("./routes"));

const syncOptions = { force: true };

//If running a test, set syncOptions.force to true
if (process.env.NODE_ENV === "test") {
    syncOptions.force = true;
};

//Starting the server, syncing our models
db.sequelize.sync(syncOptions).then(function () {
    require("./db/seeds.js");
    app.listen(PORT, function () {
        console.log(
            "Listening on port %s. Visit http://localhost:%s/ in your browser.",
            PORT,
            PORT
        );
    });
});

module.exports = app;