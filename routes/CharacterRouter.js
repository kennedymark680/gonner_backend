const router = require('express').Router()
const controller = require('../controllers/CharacterController')

router.post('/:guesslist_id', controller.CreateCharacter)

module.exports = router
