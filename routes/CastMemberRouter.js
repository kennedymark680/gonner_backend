const router = require('express').Router()
const controller = require('../controllers/CastMemberController')

router.get('/', controller.GetAllCastMembersByMovieId)

module.exports = router
