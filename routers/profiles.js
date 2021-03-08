const express = require('express')
const profileController = require('../controllers/profile')
const profileRouter = express.Router()

// profileRouter.route('/profiles')
//     .get(profileController.index)
    
//     .post(profileController.store)


profileRouter.get('/profiles', profileController.index)

module.exports = profileRouter