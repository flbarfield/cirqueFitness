const express = require('express')
const app = express()
const mongoose = require('mongoose')
const passport = require('passport')
const session = require('express-session')
// const MongoStore = require('connect-mongo')(session)
const flash = require('express-flash')
const logger = require('morgan')
const connectDB = require('./config/database')
const homeRoutes = require('./routes/home')
const fitnessRoute = require('./routes/fitnessApp')

require('dotenv').config({path: './config/.env'})
require('./config/passport')(passport)

connectDB()

app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(express.urlencoded({extended:true}))
app.use(express.json())

app.use('/', homeRoutes)
app.use('/fitnessApp', fitnessRoute)

app.listen(process.env.PORT, () => {
    console.log('Server is running! WHOOP! Port2121')
})