const mongoose = require('mongoose')
const { Schema } = mongoose

const adminAccSchema = new Schema ({
    name: String,
    email: String,
    password: String
}, {timestamps: true})

const adminAcc = mongoose.model('AdminAcc', adminAccSchema)
module.exports = adminAcc