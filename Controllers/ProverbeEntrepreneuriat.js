const ProverbeEntrepreneuriat = require('../Models/ProverbesEntrepreneuriat')

module.exports= {
    getAllProverbesEntrepreneurait : async(req, res) => {
        try {
            const getProverbes = await ProverbeEntrepreneuriat.find()
            res.status(202).json(getProverbes)
        } catch (error) {
            res.status(404).json("error")
        }
    },

    createProverbesEntrepreneuriat : async (req,res) => {
        const newProverbe = await new ProverbeEntrepreneuriat(req.body)
        try {
            await newProverbe.save()
            res.status(202).json("Enregitre avec succes")
        } catch (error) {
            res.status(404).json("error")
        }
    },

    modifyProverbeEnrtrepreneuriat : async (req, res) => {
        const {id} = req.params
        console.log(req.params.id)
        try {
            const updataData = await ProverbeEntrepreneuriat.findByIdAndUpdate(id, {title: req.body.title}, {new : true})
            res.status(202).json(updataData)
        } catch (error) {
            res.status(404).json(error)
        }
    },

    deleteProverbeEntrepreneuriat : async (req, res) => {
        const {id} = req.params
        console.log(req.params.id)
        try {
            const deleteObject = await ProverbeEntrepreneuriat.findByIdAndDelete(id)
            res.status(202).json(deleteObject)
        } catch (error) {
            res.status(404).json("error")
        }
    }
}