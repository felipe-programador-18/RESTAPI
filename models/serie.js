const mongoose = require('mongoose')

//this case i create one function that passed in the array comments
const Commentschema = mongoose.Schema({
    comments: String
})

const serieSchema = mongoose.Schema({
    name: {
        type:String,
        required: true
    },

    status: {
        type:String,
        enumValues: ['to-watch', 'watching','watched']
    },
    comments: [Commentschema]
})

const Serie = mongoose.define('Serie', serieSchema);

module.exports = Serie