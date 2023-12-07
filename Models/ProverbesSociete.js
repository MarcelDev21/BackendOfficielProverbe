const mongoose = require('mongoose')

const ProverbesSocieteSchema = mongoose.Schema({
    title:{type:String},
    description:{type:String, required: true}
})

module.exports = mongoose.model('ProverbesSocieteSchema', ProverbesSocieteSchema)