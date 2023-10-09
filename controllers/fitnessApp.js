const Exercises = require('../models/exercises')

module.exports = {
    getFitApp: async (req, res) => {
        console.log(req.user)
        const userName = req.user
        try {
           const exerciseItems = await Exercises.find({userId: req.user.id})
           res.render('fitnessApp.ejs', {exercises: exerciseItems, userName: req.user.userName})  
        } catch (err) {
            console.log(err)
        }
    },
  
    createExercise: async(req, res) => {
        try {
            await Exercises.create({
                name: req.body.name,
                sets: 0,
                reps: 0,
                description: req.body.description,
                userId: req.user.id,
            })
            console.log('Exercise has been added!')
            res.redirect('/fitnessApp')
        } catch (err) {
            console.log(err)
        }
    },

    modRep: async(req, res) => {
        try {
            await Exercises.findOneAndUpdate({_id:req.params.id}, {$set: {reps: req.body.userReps}})
            console.log('Rep Added')
            res.redirect('/fitnessApp')
        } catch (err) {
            console.log(err)
        }
    },

    modSet: async (req, res) => {
        try {
            await Exercises.findOneAndUpdate({_id:req.params.id}, {$set: {sets: req.body.userSets}})
            console.log('Set Added')
            res.redirect('/fitnessApp')
        } catch (err) {
            console.log(err)
        }
    },


    deleteExercise: async (req,res) => {
        try {
            let exercise = await Exercises.findById({ _id: req.params.id})

            await exercise.deleteOne({_id:req.params.id})
            console.log('Deleted Exercise')
            res.redirect('/fitnessApp')
        } catch (err) {
            console.log(err)
        }
    }
}