const express = require('express')
const homeController = require('../controllers/home')
const homeRouter = express.Router()

// homeRouter.route('/homes')
//     .get(homeController.index)
    
//     .post(homeController.check)


homeRouter.get('/homes', homeController.index)

module.exports = homeRouter