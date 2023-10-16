const Exercises = require('../models/exercises')
const moment = require('moment')

module.exports = {
    getFitApp: async (req, res) => {
        console.log(req.user)
        
        try {
            const now = moment()
            const endOfDay = now.endOf('day').toString()
            const startOfDay = now.startOf('day').toString()

           const exerciseItems = await Exercises.find({$and: [ 
                {userId: req.user.id}, 
                {date: {'$gte': startOfDay,
                    '$lt': endOfDay}

            }]}) 

           let currentDateInput = moment().format('YYYY-MM-DD')

           res.render('fitnessApp.ejs', {exercises: exerciseItems, userName: req.user.userName, currentDateInput})  
           
        } catch (err) {
            console.log(err)
        }
    },

    getUserDateEntries: async (req, res) => {
        try {
            const reqDate = moment(req.body.userDate)
            const startOfUserDate = reqDate.startOf('day').toString()
            const endOfUserDate = reqDate.endOf('day').toString()
            
            const exerciseItems = await Exercises.find({$and: [ 
                {userId: req.user.id}, 
                {date: {'$gte': startOfUserDate,
                    '$lt': endOfUserDate}

            }]})

            let currentDateInput = moment(reqDate).format('YYYY-MM-DD')

            res.render('fitnessApp.ejs', {exercises: exerciseItems, userName: req.user.userName, currentDateInput}) 
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
                weight: 0,
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

    modWeight: async (req, res) => {
        try {
            await Exercises.findOneAndUpdate({_id:req.params.id}, {$set: {weight: req.body.userWeight}})
            console.log('Weight Added')
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
    },

    addNote: async (req, res) => {
        try {
            await Exercises.findOneAndUpdate({_id:req.params.id}, {$set: {notes: req.body.notes}})
            console.log('Note Added')
            res.redirect('/fitnessApp')
        }  catch (err) {
            console.log(err)
        }
    }
}