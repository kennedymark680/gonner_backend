const { Movie } = require('../models')

const GetAllMovies = async (req, res) => {
  try {
    let movies = await Movie.findAll()
    res.send(movies)
  } catch (error) {
    throw error
  }
}

const CreateMovie = async (req, res) => {
  try {
    let movieBody = req.body
    let movie = await Movie.create(movieBody)
    res.send(movie)
  } catch (error) {
    throw error
  }
}

const GetMovieByMovieId = async (req, res) => {
  try {
    let movieId = parseInt(req.params.movie_id)
    let movie = await Movie.findByPk(movieId)
    res.send(movie)
    console.log(movie)
  } catch (error) {
    throw error
  }
}

module.exports = {
  GetAllMovies,
  CreateMovie,
  GetMovieByMovieId
}
