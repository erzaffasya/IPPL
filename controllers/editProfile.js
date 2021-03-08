const detailUserModel = require('../models/detailUser')
var userAccModel = require('../models/userAcc')
var session = require('express-session')



module.exports = {
    create: function(request,response){
        if(session.uniqueID){
            detailUserModel.find(function(error, data){
                if(error) console.log(error)
                var datas = data.filter(user => {
                    return user.email == session.uniqueID
                })
                response.render('pages/editprofile', {datas})
            })
        } else {
            response.redirect('/')
        }
    },

    update: function(request, response, next) {
        if(session.uniqueID){
            detailUserModel.findOne({email: session.uniqueID}, function (err, detailUser) {
                if(err) {
                    console.log(err)       
                } else {
                    detailUser.name = request.body.name
                    detailUser.nim = request.body.nim
                    detailUser.email = request.body.email
                    detailUser.password = request.body.password
                    detailUser.saldo = request.body.saldo
                    detailUser.prodi = request.body.prodi
                    detailUser.foto = request.body.foto
    
                    detailUser.save(function (err, data) {
                        if(err) console.log(err)

                        console.log(detailUser)
                    })
                    next()
                }
            })
    
            userAccModel.findOne({email: session.uniqueID}, function (err, userAcc) {
                if(err) {
                    console.log(err)       
                } else {
                    userAcc.name = request.body.name
                    userAcc.email = request.body.email
                    userAcc.password = request.body.password
    
                    userAcc.save(function (err, data) {
                        if(err) console.log(err)

                        console.log(userAcc)
                    })
                    // session.uniqueID = userAcc.email
                    next()
                }
            })
            
            response.redirect('/homes')
        }
    }

    // store: function(request,response){ 
    //     if(session.uniqueID){
    //         const updateData = detailUserModel.findOne({email: session.uniqueID})
    //         console.log(session.uniqueID)
    //     }
        //     updateData.overwrite({
        //         name: request.body.name,
        //         nim: request.body.nim,
        //         email: request.body.email,
        //         password: request.body.password,
        //         saldo: request.body.saldo,
        //         prodi: request.body.prodi,
        //         foto: request.body.foto
        //     })

        //     const updateData2 = userAccModel.findOne({email: session.uniqueID})

        //     updateData2.overwrite({
        //         name: request.body.name
        //     })
        // }

        // response.redirect('/homes')
        // detailUserModel.find(function(error, data){
        //     if(error) console.log(error)
        //     var datas = data.filter(user => {
        //         return user.email == session.uniqueID
        //     })
        //     const detailUser = detailUserModel.updateMany( {
        //         email: datas.email
        //     },
            
        //     {
        //         set: {
        //             name: request.body.name,
        //             nim: request.body.nim,
        //             email: request.body.email,
        //             password: request.body.password,
        //             saldo: request.body.saldo,
        //             prodi: request.body.prodi,
        //             foto: request.body.foto
        //         }
        //     })

        //     const userAcc = userAccModel.updateMany( {
        //         email: datas.email
        //     },
            
        //     {
        //         set: {
        //             name: request.body.name
        //         }
        //     })
        //     // detailUser.save()
        //     // userAcc.save()
    
        //     // e(function(error, result){
        //     //     if(error) console.log(error)
    
        //     //     console.log(result)
        //     //     
        //     // })
        // })
        // updateData.save(function(error, result){
        //     if(error) console.log(error)
        //     response.redirect('/homes')
        //     console.log(result)
        // })
        
    // }
}