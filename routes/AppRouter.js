const Router = require('express').Router()
const MovieRouter = require('./MovieRouter')
const CastMemberRouter = require('./CastMemberRouter')
const CharacterRouter = require('./CharacterRouter')

Router.use('/movie', MovieRouter)
Router.use('/castmember', CastMemberRouter)
Router.use('/character', CharacterRouter)

module.exports = Router
