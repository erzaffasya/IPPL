const detailUserModel = require('../models/detailUser')
var userAccModel = require('../models/userAcc')
var session = require('express-session')



module.exports = {
    index: function(request,response){
        if(session.uniqueID){
            detailUserModel.find(function(error, data){
                if(error) console.log(error)
                var datas = data.filter(user => {
                    return user.email == session.uniqueID
                })
                response.render('pages/user/profile', {datas})
            })
            // response.render('pages/home')
        } else {
            response.redirect('/')
        }
    }
}