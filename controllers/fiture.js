var userAccModel = require('../models/userAcc')
var session = require('express-session')

module.exports = {
    index: function(request,response){
        if(session.uniqueID){
            response.render('pages/fitur')
        } else {
            response.redirect('/')
        }
    }
}