// requiring our models
const db = require("../models");

// Routes
module.exports = function(app){

    // GET route for getting all the workouts
    app.get("/api/workouts", function(req, res){
        db.Workout.find({})
        .populate("exercises")
        .then(workoutData => {
            res.json(workoutData);
        })
        .catch(err => {
            res.json(err);
        })
    });

    app.get("/api/workouts/range", function(req, res){
        db.Workout.find({})
        .populate("exercises")
        .then(workoutData => {
            res.json(workoutData)
        })
        .catch(err => {
            res.json(err);
        });
    });

    // POST route
    app.post("/api/workouts", function(req, res){
        db.Workout.create({ day: Date.now })
        .then(data => {
            res.json(data);
        })
        .catch(err => {
            res.json(err);
        });
    });

    // PUT route
    app.put("/api/workouts/:id", function (req, res){
        db.Exercise.create(req.body)
        .then((data) => 
            db.Workout.findOneAndUpdate(
                {_id: req.params.id},
                {
                    $push: { exercise: data._id },
                    $inc: { totalDuration: data.duration }
                },
                { new: true }
            )
        )
        .then(data => {
            res.json(data);
        })
        .catch(err => {
            res.json(err)
        });
    });
};