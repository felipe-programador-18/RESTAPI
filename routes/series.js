const express = require('express')
const router = express.Router()
const Serie = require('../models/serie')

const series = [{
    name:'frinds',
    nametwo: 'homem de ferro',
    nametree:'Wolverine'
}]
// create router to adding get
router.get('/', async(req,res) =>{
    const series = await Serie.find({})
    res.send([series])
})


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

//adding router deleted

router.delete('/:id', async(req, res) => {
  await Serie.remove({id: req.params.id})
  res.send({
      success:true
    })
})

router.get('/:id', async (req, res) =>{
    const serie = await Serie.findOne({_id: req.params.id})
    res.send(serie)
} )

router.put('/:id', async (req,res) => {
 const serie = Serie.findOne({_id: req.params.id})
 serie.name = req.body.name
 serie.status = req.body.status

 try{
     await serie.save()
     res.send(serie)
 } catch(e){
    res.send({
        success: false,
        errors: Object.keys(e.errors)
    })
 }
})


module.exports = router