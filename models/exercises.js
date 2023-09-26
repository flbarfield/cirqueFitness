const mongoose = require('mongoose')

const ExerciseSchema = new mongoose.Schema({
    exercise: {
        type: String,
        required: true,
    },
    sets: {
        type: Number,
        required: true,
    },
    reps: {
        type: Number,
        required: true,
    },
    timer: {
        type: Boolean,
        required: false,
    }, 
})

module.exports = mongoose.model('Exercise', ExerciseSchema)