const Router = require('express').Router()
const MovieRouter = require('./MovieRouter')
const CastMemberRouter = require('./CastMemberRouter')
const CharacterRouter = require('./CharacterRouter')
const GuessListRouter = require('./GuessListRouter')

Router.use('/movie', MovieRouter)
Router.use('/castmember', CastMemberRouter)
Router.use('/character', CharacterRouter)
Router.use('/guesslist', GuessListRouter)

module.exports = Router
