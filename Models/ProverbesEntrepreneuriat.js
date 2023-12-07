const mongoose = require('mongoose')

const ProverbesEntrepreneuriatSchema = mongoose.Schema({
    title:{type:String},
    description:{type:String}
})

module.exports = mongoose.model('ProverbesEntrepreneuriatSchema', ProverbesEntrepreneuriatSchema)