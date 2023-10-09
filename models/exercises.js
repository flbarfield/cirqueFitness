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
        require: false,
    },
    userId: {
        type: String,
        require: true,
    },
    notes: {
        type: String,
        require: false,
    },
    date: {
        type: Date,
        require: true,
    }

})

module.exports = mongoose.model('Exercise', ExerciseSchema)