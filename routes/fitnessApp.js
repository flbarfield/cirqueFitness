const express = require('express')
const router = express.Router()
const fitnessAppController = require('../controllers/fitnessApp')
const {ensureAuth} = require('../middleware/auth')

router.get('/', fitnessAppController.getFitApp)

router.post('/createExercise', fitnessAppController.createExercise)

router.put('/modRep:id', fitnessAppController.modRep)

router.put('/modSet:id', fitnessAppController.modSet)

router.delete('/deleteExercise:id', fitnessAppController.deleteExercise)

module.exports = router