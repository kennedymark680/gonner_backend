const router = require('express').Router()
const controller = require('../controllers/CastMemberController')

router.get('/', controller.GetAllCastMembersByMovieId)
router.post('/create/:movie_id', controller.CreateCastMember)

module.exports = router
