// Dependancies
const path = require("path");

// Routes
module.exports = function(app){
    // Each routes below handles the html page the user gets sent to.
    // route to home page
    app.get("/", function(req, res){
        res.sendFile(path.join(__dirname, "../public/index.html"));
    });

    // route to exercise page
    app.get("/exercise", function(req, res){
        res.sendFile(path.join(__dirname, "../public/exercise.html"));
    });

    // route to stats page
    app.get("/stats", function(req, res){
        res.sendFile(path.join(__dirname, "../public/stats.html"))
    })
}