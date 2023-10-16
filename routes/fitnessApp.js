const express = require('express')
const router = express.Router()
const fitnessAppController = require('../controllers/fitnessApp')
const {ensureAuth} = require('../middleware/auth')

router.get('/', ensureAuth, fitnessAppController.getFitApp)

router.get('/getUserDateEntries', fitnessAppController.getUserDateEntries)

router.post('/createExercise', fitnessAppController.createExercise)

router.put('/modRep:id', fitnessAppController.modRep)

router.put('/modSet:id', fitnessAppController.modSet)

router.put('/modWeight:id', fitnessAppController.modWeight)

router.put('/addNote:id', fitnessAppController.addNote)

router.delete('/deleteExercise:id', fitnessAppController.deleteExercise)

module.exports = router