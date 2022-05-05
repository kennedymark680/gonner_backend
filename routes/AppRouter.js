const Router = require('express').Router()
const MovieRouter = require('./MovieRouter')

Router.use('/movie', MovieRouter)

module.exports = Router
