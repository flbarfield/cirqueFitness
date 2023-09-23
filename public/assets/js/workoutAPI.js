const express = require('express')
const app = express()
const cors = require('cors')

app.use(cors())

let exercises = {
    'Hanging Leg Lifts' : {
        'description': '',
        'photo': '',
        'apperatus': 'any',
        'stopwatch': false,
    }
}