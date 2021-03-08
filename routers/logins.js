const express = require('express')
const loginController = require('../controllers/login')
const loginRouter = express.Router()

loginRouter.route('/logins')
    .get(loginController.index)
    
    .post(loginController.check)

loginRouter.get('/logins/redirect', loginController.redirect)
// loginRouter.get('/logins/validate', loginController.validate)
// loginRouter.post('/logins', loginController.check)

module.exports = loginRouter