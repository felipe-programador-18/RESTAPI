const express = require('express')
const router = express.Router()
const Serie = require('../models/serie')

const series = [{
    name:'frinds',
    nametwo: 'homem de ferro',
    nametree:'Wolverine'
}]

//create router to get post
router.post('/', async (req,res) => {
   const serie  = new Serie(req.body)
   try{
       await serie.save()
       res.send(serie)
   }catch(e){
       res.send({
           success: false,
           errors: Object.keys(e.errors)
       })
   }
})

// create router to caught get
router.get('/', async(req,res) =>{
    const series = await Serie.find({})
    res.send([series])
})

router.get('/:id', (req, res) =>{
    res.send(req.params.id)
} )

module.exports = router