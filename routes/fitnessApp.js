const express = require('express')
const router = express.Router()
const fitnessAppController = require('../controllers/fitnessApp')
const {ensureAuth} = require('../middleware/auth')

router.get('/', fitnessAppController.getFitApp)

router.post('/createExercise', fitnessAppController.createExercise)

router.put('/addRep:id', fitnessAppController.addRep)

router.put('/subRep:id', fitnessAppController.subRep)

router.put('/addSet:id', fitnessAppController.addSet)

router.put('/subSet:id', fitnessAppController.subSet)

router.delete('/deleteExercise:id', fitnessAppController.deleteExercise)

module.exports = router