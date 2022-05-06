const Router = require('express').Router()
const MovieRouter = require('./MovieRouter')
const CastMemberRouter = require('./CastMemberRouter')

Router.use('/movie', MovieRouter)
Router.use('/castmember', CastMemberRouter)

module.exports = Router
