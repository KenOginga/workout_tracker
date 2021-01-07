// requiring our models
const db = require("../models");

// Routes
module.exports = function(app){

    // GET route for getting all the workouts
    app.get("/api/workouts", function(req, res){
        db.Workout.find({})
        .then(workoutData => {
            res.json(workoutData);
        })
        .catch(err => {
            res.json(err);
        })
    });

    app.get("/api/workouts/range", function(req, res){
        db.Workout.find({})
        .then(workoutData => {
            res.json(workoutData)
        })
        .catch(err => {
            res.json(err);
        });
    });

    // POST route
    app.post("/api/workouts", function(req, res){
        db.Workout.create({})
        .then(data => {
            res.json(data);
        })
        .catch(err => {
            res.json(err);
        });
    });

    // PUT route
    app.put("/api/workouts/:id", function (req, res){
        db.Workout.findByIdAndUpdate(req.params.id,
            { $push: { exercises: req.body}},
            { new: true }
            ).then(data => {
                res.json(data);
        })
    });
};