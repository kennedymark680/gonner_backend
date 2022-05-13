const router = require('express').Router()
const controller = require('../controllers/UserController')

router.get('/', controller.GetAllUsers)

module.exports = router
