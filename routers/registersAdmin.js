const express = require('express')
const registerController = require('../controllers/registerAdmin')
const registerRouter = express.Router()

registerRouter.route('/regadmin')
    .get(registerController.create)
    
    .post(registerController.store)

// registerRouter.get('/registers', registerController.form)
// registerRouter.post('/registers', registerController.check)

module.exports = registerRouter