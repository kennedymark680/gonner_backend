const router = require('express').Router()
const controller = require('../controllers/CastMemberController')

router.get('/:movie_id', controller.GetAllCastMembersByMovieId)
router.post('/:movie_id', controller.CreateCastMember)
router.put('/:castmember_id', controller.Mortality)
router.delete('/:castmember_id', controller.DeleteCastMember)

module.exports = router
