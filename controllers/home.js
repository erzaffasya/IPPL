var userAccModel = require('../models/userAcc')
var adminAccModel = require('../models/adminAcc')
var session = require('express-session')

module.exports = {
    index: function(request,response, next){
        if(session.uniqueID){
            adminAccModel.find(function(err, data) {
                var datas = data.filter(user => {
                    return user.email == session.uniqueID
                })
                if(datas.length > 0){
                    response.render('pages/admin/home', {datas})
                } else {
                    userAccModel.find(function(err, data) {
                        var datas2 = data.filter(user => {
                            return user.email == session.uniqueID
                        })
                        if(datas2.length > 0){
                            response.render('pages/user/home', {datas2})
                        }
                    })
                }
            })

        } else {
            response.redirect('/')
        }
        
    }
}