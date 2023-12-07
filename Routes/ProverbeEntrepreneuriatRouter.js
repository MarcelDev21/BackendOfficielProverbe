const ProverbeEntrepreneuriatController = require('../Controllers/ProverbeEntrepreneuriat')
const router = require('express').Router()

router.get('/getAllProverbesEntrepreneurait', ProverbeEntrepreneuriatController.getAllProverbesEntrepreneurait)
router.post('/createProverbesEntrepreneuriat', ProverbeEntrepreneuriatController.createProverbesEntrepreneuriat)
router.put('/modifyProverbeEnrtrepreneuriat', ProverbeEntrepreneuriatController.modifyProverbeEnrtrepreneuriat)
router.post('/deleteProverbeEntrepreneuriat', ProverbeEntrepreneuriatController.deleteProverbeEntrepreneuriat)

module.exports = router