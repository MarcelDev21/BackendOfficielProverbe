const ProverbeSociete = require('../Controllers/ProverbesSociete')
const router = require('express').Router()

router.get('/getAllProverbeSociete', ProverbeSociete.getAllProverbeSociete)
router.post('/createNewProverbe', ProverbeSociete.createNewProverbe)
router.put('/modifierUnProverbe/:id', ProverbeSociete.modifierUnProverbe)
router.delete('/deleteUnProverbe/:id', ProverbeSociete.deleteUnProverbe)

module.exports = router