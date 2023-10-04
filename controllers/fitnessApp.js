const Exercises = require('../models/exercises')

module.exports = {
    getFitApp: async (req, res) => {
        console.log(req.user)
        const userName = req.user
        try {
           const exerciseItems = await Exercises.find({userId: req.user.id})
           res.render('fitnessApp.ejs', {exercises: exerciseItems, username: userName})  
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

    addRep: async(req, res) => {
        try {
            await Exercises.findOneandUpdate({_id:req.body.reps}, {$inc: {reps: 1}})
            console.log('Rep Added')
        } catch (err) {
            console.log(err)
        }
    },

    subRep: async(req, res) => {
        try {
            await Exercises.findOneandUpdate({_id:req.body.exerciseFromJSFile}, {
                completed: true
            })
            console.log('Rep Subtracted')
            res.json(rep -= 1)
        } catch (err) {
            console.log(err)
        }
    },

    addSet: async (req, res) => {
        try {
            await Exercises.findOneandUpdate({_id: req.body.exerciseFromJSFile}, {
                completed: true
            })
            console.log('Set Added')
            res.json(set += 1)
        } catch (err) {
            console.log(err)
        }
    },

    subSet: async (req, res) => {
        try {
            await Exercises.findOneandUpdate({_id: req.body.exerciseFromJSFile}, {
                completed: true
            }) 
            console.log('Set Subtracted')
            res.json(set -= 1)
        } catch (err) {
            console.log(err)
        }
    },

    deleteExercise: async (req,res) => {
        try {
            await Exercises.findOneAndDelete({_id:req.body.exerciseFromJSFile})
            console.log('Deleted Exercise')
            res.json('Deleted It')
        } catch (err) {
            console.log(err)
        }
    }
}