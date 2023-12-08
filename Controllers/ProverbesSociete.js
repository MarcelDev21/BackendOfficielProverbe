const ProverbeSociete = require('../Models/ProverbesSociete')

module.exports={
    getAllProverbeSociete : async (req,res) => {
        try {
          const getAllProverbe = await ProverbeSociete.find()  
          res.status(202).json(getAllProverbe)
        } catch (error) {
            res.status(404).json("error")
        }
    },

    createNewProverbe : async (req, res) => {
        try {
          const newCreateProverbe = await new ProverbeSociete(req.body)
          await newCreateProverbe.save()
          res.status(202).json("Votre Enregistrement a été enrégistré")
        } catch (error) {
            res.status(404).json("error")
        }
    },

    modifierUnProverbe : async (req, res) => {
        try {
            //console.log(req.body)
            const newValue = await new ProverbeSociete(req.body)
            console.log(newValue)
            const updateProverbe = await ProverbeSociete.findByIdAndUpdate(req.params.id, {
                title: req.body.title,
                description: req.body.description
            }, {new: true})
            res.status(202).json(updateProverbe)
        } catch (error) {
            res.status(404).json("error")
        }
    },

    deleteUnProverbe : async (req, res) => {
        try {
            const valueDelete = await ProverbeSociete.findByIdAndDelete(req.params.id)
            res.status(202).json("Votre valeur est supprimée")
        } catch (error) {
            res.status(404).json("error") 
        }
    }
}