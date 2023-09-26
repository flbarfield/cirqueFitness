const mongoose = require('mongoose')

const ExerciseSchema = new mongoose.Schema({
    exercise: {
        type: String,
        required: true,
    }
})

module.exports = mongoose.model('Exercise', ExerciseSchema)