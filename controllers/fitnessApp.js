const Exercise = require('..models/Exercise')

module.exports = {
    getFitApp: async (req, res) => {
        res.render('fitnessApp.ejs')
    }
}