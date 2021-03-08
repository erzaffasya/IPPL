const express = require('express')
const editProfileController = require('../controllers/editProfile')
const editProfileRouter = express.Router()

// editProfileRouter.route('/editProfiles')
//     .get(editProfileController.create)
    
//     .post(editProfileController.store)

editProfileRouter.get('/editProfiles', editProfileController.create)
editProfileRouter.post('/editProfiles', editProfileController.update)


module.exports = editProfileRouter