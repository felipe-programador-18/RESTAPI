const express = require('express')
const api = express()
const port = process.env.PORT || 3000

const mongo = process.env.MONGO ||  'mongodb://localhost/minhas-series-rest'
const mongoose = require('mongoose')
mongoose.Promise = global.Promise

const movies = require('./routes/series')
api.use('/series', movies)

//const series = [{
    //name:'frinds',
    //nametwo: 'homem de ferro',
  //  nametree:'Wolverine'
//}]
//api.get('/series', (req,res) => {
  //  res.send(series)
//})

mongoose.
connect(mongo, {useNewUrlParser: true, 
  useUnifiedTopology: true
})
.then(() =>{
  api.listen(port , ()=> console.log('...starting server'))
})
.catch(e => console.log(e))

