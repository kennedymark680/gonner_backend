const router = require('express').Router()
const controller = require('../controllers/MovieController')

router.get('/:movie_id', controller.GetMovieByMovieId)
router.get('/', controller.GetAllMovies)
router.post('/create', controller.CreateMovie)
router.put('/:movie_id', controller.UpdateGonnerOrder)

module.exports = router
