const bodyParser = require('body-parser')
const express = require('express')
const app = express()
const MongoClient = require('mongodb').MongoClient

app.use(express.static('public'))
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())

MongoClient.connect('mongodb+srv://barfieldfredrick:rrbXZidE28b9oya9@rickyscluster.cfn7tvv.mongodb.net/')
    .then(client => {
        console.log('Connected to database.')
        const db = client.db('cirqueFitness')
        const exerciseCollection = db.collection('exercises')
    })

    app.listen(3000, function() {
        console.log('listening on port 3000')
    })