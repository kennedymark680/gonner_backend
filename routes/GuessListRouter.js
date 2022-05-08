const router = require('express').Router()
const controller = require('../controllers/GuessListController')

router.post('/:movie_id', controller.CreateGuessList)
router.get('/:movie_id', controller.GetGuessListByMovieId)

module.exports = router
