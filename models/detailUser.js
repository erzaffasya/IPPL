const mongoose = require('mongoose')
const { Schema } = mongoose

const detailUserSchema = new Schema ({
    name: String,
    nim: String,
    email: String,
    password: String,
    saldo: String,
    prodi: String,
    foto: String
}, {timestamps: true})

const detailUser = mongoose.model('DetailUser', detailUserSchema)
module.exports = detailUser