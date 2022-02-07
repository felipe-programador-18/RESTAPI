const express = require('express')
const api = express()
const port = 3000
const mongoose = require('mongoose')

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


api.listen(port, ()=> console.log('starting serving'))