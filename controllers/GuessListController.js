const { GuessList } = require('../models')

const CreateGuessList = async (req, res) => {
  try {
    let movieId = parseInt(req.params.movie_id)
    const guessListBody = {
      movieId,
      ...req.body
    }
    const guessList = await GuessList.create(guessListBody)
    res.send(guessList)
  } catch (error) {
    throw error
  }
}

const GetGuessListByMovieId = async (req, res) => {
  try {
    const movieId = parseInt(req.params.movie_id)
    let guessLists = await GuessList.findAll({ where: { movieId: movieId } })
    res.send(guessLists)
  } catch (error) {
    throw error
  }
}

const DeleteAllListByMovieId = async (req, res) => {
  try {
    const movieId = parseInt(req.params.movie_id)
    let guessLists = await GuessList.destroy({ where: { movieId: movieId } })
    res.send(`All lists deleted for movie with the id of ${movieId}`)
  } catch (error) {
    throw error
  }
}

module.exports = {
  CreateGuessList,
  GetGuessListByMovieId,
  DeleteAllListByMovieId
}
