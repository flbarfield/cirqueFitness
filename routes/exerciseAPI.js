const express = require('express')
const router = express.Router()
const fitnessAppController = require('../controllers/fitnessApp')

router.get('/API', fitnessAppController.getFitApp)

module.exports = router