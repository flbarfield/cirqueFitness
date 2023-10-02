const express = require('express')
const router = express.Router()
const fitnessAppController = require('../controllers/fitnessApp')
const {ensureAuth} = require('../middleware/auth')

router.get('/', fitnessAppController.getFitApp)

router.post('/createExercise', fitnessAppController.createExercise)

router.put('/addRep', fitnessAppController.addRep)

router.put('/subRep', fitnessAppController.subRep)

router.put('/addSet', fitnessAppController.addSet)

router.put('/subSet', fitnessAppController.subSet)

router.delete('/deleteExercise', fitnessAppController.deleteExercise)

module.exports = router