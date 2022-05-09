const router = require('express').Router()
const controller = require('../controllers/GuessListController')

router.post('/:movie_id', controller.CreateGuessList)
router.get('/:movie_id', controller.GetGuessListByMovieId)
router.delete('/:movie_id', controller.DeleteAllListByMovieId)
router.put('/:guesslist_id', controller.UpdateGonnerOrder)
router.put('/score/:guesslist_id', controller.UpdateScore)

module.exports = router
