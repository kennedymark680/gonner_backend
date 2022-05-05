const router = require('express').Router()
const controller = require('../controllers/MovieController')

router.get('/', controller.GetAllMovies)

module.exports = router
