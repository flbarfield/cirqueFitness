const express = require('express')
const router = express.Router()
const fitnessAppController = require('../controllers/fitnessApp')

router.get('/', fitnessAppController.getFitApp)

router.post('/createExercise', fitnessAppController.createExercise)

router.put('/addRep', fitnessAppController.addRep)

router.put('/subRep', fitnessAppController.subRep)

router.delete('/deleteExercise', fitnessAppController.deleteExercise)

module.exports = router