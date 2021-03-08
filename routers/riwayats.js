const express = require('express')
const riwayatController = require('../controllers/riwayat')
const riwayatRouter = express.Router()

// riwayatRouter.route('/riwayats')
//     .get(riwayatController.index)
    
//     .post(riwayatController.check)


riwayatRouter.get('/riwayats', riwayatController.index)

module.exports = riwayatRouter