const adminAccModel = require('../models/adminAcc')

module.exports = {
    create: function(request,response){
        response.render('pages/admin/register')
    },

    store: function(request,response){ 
        const adminAcc = new adminAccModel({
            name: request.body.name,
            email: request.body.email,
            password: request.body.password
        })

        adminAcc.save(function(error, result){
            if(error) console.log(error)

            console.log(result)
           
        })

        response.redirect('/')

    }
}