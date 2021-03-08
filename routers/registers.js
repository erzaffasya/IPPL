const express = require('express')
const registerController = require('../controllers/register')
const registerRouter = express.Router()

registerRouter.route('/registers')
    .get(registerController.create)
    
    .post(registerController.store)

// registerRouter.get('/registers', registerController.form)
// registerRouter.post('/registers', registerController.check)

module.exports = registerRouter