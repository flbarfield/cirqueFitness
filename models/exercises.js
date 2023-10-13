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
    description: {
        type: String,
        require: true,
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
        default: Date.now,
    },
    weight: {
        type: Number,
        required: true,
    }

})

module.exports = mongoose.model('Exercise', ExerciseSchema)