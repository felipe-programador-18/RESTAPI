const express = require('express')
const router = express.Router()

const series = [{
    name:'frinds',
    nametwo: 'homem de ferro',
    nametree:'Wolverine'
}]

router.get('/', (req,res) =>{
    res.send([series])
})

router.get('/:id', (req, res) =>{
    res.send(req.params.id)
} )

module.exports = router