const mongoose = require('mongoose')

const userExerciseSchema = new mongoose.Schema({
    title: {
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
    decription: {
        type: String,
        require: true,
    },
    userId: {
        type: String,
        require: true,
    }
})

module.exports = mongoose.model('userExercise', userExerciseSchema)