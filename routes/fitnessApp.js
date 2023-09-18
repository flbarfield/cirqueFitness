const express = require('express')
const router = express.Router()
const fitnessAppController = require('../controllers/fitnessApp')

router.get('/', fitnessAppController.getFitApp)

module.exports = router