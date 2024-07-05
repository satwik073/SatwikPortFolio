const express = require('express')
const postFormData = require('../Controller/formController')
const router = express.Router()

router.post('/form/submit', postFormData)
module.exports = router