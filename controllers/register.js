const userAccModel = require('../models/userAcc')
const detailUserModel = require('../models/detailUser')

module.exports = {
    create: function(request,response){
        response.render('pages/register')
    },

    store: function(request,response){ 
        const userAcc = new userAccModel({
            name: request.body.name,
            email: request.body.email,
            password: request.body.password
        })

        const detailUser = new detailUserModel({
            name: request.body.name,
            email: request.body.email,
            password: request.body.password
        })

        userAcc.save(function(error, result){
            if(error) console.log(error)

            console.log(result)
           
        })

        detailUser.save(function(error, result){
            if(error) console.log(error)

            console.log(result)
        })

        response.redirect('/')

    }
}