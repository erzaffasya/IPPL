const express = require('express')
const transaksiController = require('../controllers/transaksi')
const transaksiRouter = express.Router()

// transaksiRouter.route('/transaksis')
//     .get(transaksiController.index)
    
//     .post(transaksiController.check)


transaksiRouter.get('/transaksis', transaksiController.index)

module.exports = transaksiRouter