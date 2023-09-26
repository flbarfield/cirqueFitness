const Exercises = require('../models/exercises')

module.exports = {
    getFitApp: async (req, res) => {
        try {
           const exerciseItems = await Exercises.find()
           res.render('fitnessApp.ejs')  
        } catch (err) {
            console.log(err)
        }
    },
  
    createExercise: async(req, res) => {
        try {
            await Exercises.create({exercise: req.body.exerciseItem})
        } catch (err) {
            console.log(err)
        }
    },

    addRep: async(req, res) => {
        try {
            await Exercises.findOneandUpdate({_id:req.body.exerciseFromJSFile}, {
                completed: true
            })
            console.log('Rep Added')
            res.json(rep += 1)
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