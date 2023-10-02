const mongoose = require('mongoose')

const ExerciseSchema = new mongoose.Schema({
    name: {
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
    decription: {
        type: String,
        require: true,
    },
    userId: {
        type: String,
        require: true,
    }
})

module.exports = mongoose.model('Exercise', ExerciseSchema)