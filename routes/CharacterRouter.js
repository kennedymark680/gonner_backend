const router = require('express').Router()
const controller = require('../controllers/CharacterController')

router.post('/:guesslist_id', controller.CreateCharacter)
router.put('/:character_id', controller.SetOrder)
router.get('/:guesslist_id', controller.GetAllCharactersByListId)

module.exports = router
