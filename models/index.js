const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Workout plan schema

const workoutSchema = new Schema({
    day: {
        type: Date,
        default: Date.now
    },
    exercises: [
        {
            name: {
                type: String,
                trim: true,
                required: "Please enter exercise name"
            },
            type: {
                type: String,
                required: "Please enter excercise type"
            },
            weight: {
                type: Number
            },
            sets: {
                type: Number
            },
            reps: {
                type: Number
            },
            duration: {
                type: Number,
                required: "Please enter the duration time of exercise in minutes"
            },
            distance: {
                type: Number
            }
        }
    ]
});

//Mongoose model for workouts
const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;