const Router = require('express').Router()
const AuthRouter = require('./AuthRouter')
const MovieRouter = require('./MovieRouter')
const CastMemberRouter = require('./CastMemberRouter')
const CharacterRouter = require('./CharacterRouter')
const GuessListRouter = require('./GuessListRouter')

Router.use('/auth', AuthRouter)
Router.use('/movie', MovieRouter)
Router.use('/castmember', CastMemberRouter)
Router.use('/character', CharacterRouter)
Router.use('/guesslist', GuessListRouter)

module.exports = Router
