const router = require('express').Router()
const controller = require('../controllers/GuessListController')

router.post('/', controller.CreateGuessList)

module.exports = router
