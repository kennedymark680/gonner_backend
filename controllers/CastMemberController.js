const { CastMember } = require('../models')

const GetAllCastMembersByMovieId = async (req, res) => {
  try {
    let cast = await CastMember.findAll()
    res.send(cast)
  } catch (error) {
    throw error
  }
}

const CreateCastMember = async (req, res) => {
  try {
    let movieId = parseInt(req.params.movie_id)
  } catch (error) {
    throw error
  }
}

module.exports = {
  GetAllCastMembersByMovieId
}
