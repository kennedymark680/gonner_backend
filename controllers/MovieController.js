const { Movie } = require('../models')

const GetAllMovies = async (req, res) => {
  try {
    let movies = await Movie.findAll()
    res.send(movies)
  } catch (error) {
    throw error
  }
}

module.exports = {
  GetAllMovies
}
