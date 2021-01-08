const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const workoutSchema = new Schema({
    day: {
        type: Date,
        default: new Date().setDate(new Date().getDate())
    },
    exercises: [{
        type: {
            type: String,
            required: true
        },
        name: {
            type: String,
            required: true,
            trim: true
        },
        duration: {
            type: Number,
            required: true
        },
        distance: {
            type: Number,
            required: true
        },
        weight: {
            type: Number
        },
        reps: {
            type: Number
        },
        sets: {
            type: Number
        }
    }]
},
{
    toJSON: { virtuals: true }
}
);

workoutSchema.virtual("totalDuration").get(function(){
    return this.exercises.reduce((total, exercises) => {
        return total + exercises.duration;
    }, 0);
})
const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;
