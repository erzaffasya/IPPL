const mongoose = require('mongoose')
const { Schema } = mongoose

const userAccSchema = new Schema ({
    name: String,
    email: String,
    password: String
}, {timestamps: true})

const userAcc = mongoose.model('UserAcc', userAccSchema)
module.exports = userAcc