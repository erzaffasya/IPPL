var express = require('express')
var loginRouter = require('./routers/logins')
var homeRouter = require('./routers/homes')
var registerRouter = require('./routers/registers')
var registerAdminRouter = require('./routers/registersAdmin')
var fitureRouter = require('./routers/fitures')
var transaksiRouter = require('./routers/transaksis')
var riwayatRouter = require('./routers/riwayats')
var profileRouter = require('./routers/profiles')
var editProfileRouter = require('./routers/editProfiles')

var session = require('express-session')

var app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true}))
app.set('view engine', 'ejs')
app.use(session({
	secret: 'secret-key',
	resave: false,
	saveUninitialized: false
}))


var mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/kasidi', {useNewUrlParser: true, useUnifiedTopology: true})

app.get('/', function(request,response){
	console.log(session.uniqueID)
	if(session.uniqueID){
		response.redirect('/homes')
	} else {
		response.render('pages/index')
	}

})

app.use(loginRouter)
app.use(homeRouter)
app.use(registerRouter)
app.use(registerAdminRouter)
app.use(fitureRouter)
app.use(transaksiRouter)
app.use(riwayatRouter)
app.use(profileRouter)
app.use(editProfileRouter)

app.use(express.json())
app.use(express.urlencoded({ extended: true}))
app.set('view engine', 'ejs')
app.use(express.static('assets/css'))
app.use(express.static('assets/images'))
app.use(express.static('assets/js'))


app.listen(3000, function(){
	console.log('Server is okay')
})