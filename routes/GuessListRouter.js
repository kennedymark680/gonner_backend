const router = require('express').Router()
const controller = require('../controllers/GuessListController')

router.post('/:movie_id', controller.CreateGuessList)
router.get('/:movie_id', controller.GetGuessListByMovieId)
router.delete('/:movie_id', controller.DeleteAllListByMovieId)

module.exports = router
