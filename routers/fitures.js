const express = require('express')
const fitureController = require('../controllers/fiture')
const fitureRouter = express.Router()

// fitureRouter.route('/fitures')
//     .get(fitureController.index)
    
//     .post(fitureController.check)


fitureRouter.get('/fitures', fitureController.index)

module.exports = fitureRouter