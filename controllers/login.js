var userAccModel = require('../models/userAcc')
var adminAccModel = require('../models/adminAcc')
var session = require('express-session')


module.exports = {
    index: function(request,response){
        // console.log(session.uniqueID)
        if(session.uniqueID){
            response.redirect('/homes')
        } else {
            response.render('pages/login')
        }
        
    },

    check: function(request,response,next){
        console.log(request.body.email)
        adminAccModel.findOne({email: request.body.email, password: request.body.password}, function (error,data) {
            
            if(data){
                session.uniqueID = data.email
                response.redirect('/logins/redirect')
            } else {
                userAccModel.findOne({email: request.body.email, password: request.body.password}, function (error,data) {
                    if(data){
                        session.uniqueID = data.email
                        response.redirect('/logins/redirect')
                    } else {
                        response.redirect('/registers')
                    }
                })
            }
            
        })

        
    },

    redirect: function(request, response) {
        console.log(session.uniqueID)
        if(session.uniqueID){
            response.redirect('/homes')
        } else {
            response.redirect('/logins/check')
        }

    }
}