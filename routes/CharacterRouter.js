const router = require('express').Router()
const controller = require('../controllers/CharacterController')

router.post('/:guesslist_id', controller.CreateCharacter)
router.put('/:character_id', controller.SetOrder)

module.exports = router
