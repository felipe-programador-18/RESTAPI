const express = require('express')
const api = express()
const port = process.env.PORT || 3000


// here i am adding way to union api with database mongo!!
const mongo = process.env.MONGO ||  'mongodb://localhost/minhas-series-rest'
const mongoose = require('mongoose')
mongoose.Promise = global.Promise

const bodyParser = require('body-parser')
api.use(bodyParser({extended: true}))

const path = require('path')

api.set('view engine','ejs')
api.set('views', path.join(__dirname,'views'))

api.use(express.static(path.join(__dirname,'public')))


const movies = require('./routes/series')
api.use('/series', movies)

//const teste = require('./routes/series')
//api.use('/',teste)



// this command of mongoose receive three parameters!!!
mongoose.
connect(mongo, {useNewUrlParser: true, 
  useUnifiedTopology: true
})
.then(() =>{
  api.listen(port , ()=> console.log('...starting server'))
})
.catch(e => console.log(e))

