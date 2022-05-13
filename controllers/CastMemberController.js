const { CastMember, GuessList, Character } = require('../models')

const GetAllCastMembersByMovieId = async (req, res) => {
  try {
    const movieId = parseInt(req.params.movie_id)
    let cast = await CastMember.findAll({
      where: { movieId: movieId },
      order: [['createdAt']]
    })
    res.send(cast)
  } catch (error) {
    throw error
  }
}

const CreateCastMember = async (req, res) => {
  try {
    let movieId = parseInt(req.params.movie_id)
    const castBody = {
      movieId,
      ...req.body
    }
    let castMember = await CastMember.create(castBody)
    const allCastList = await GuessList.findAll({
      where: { movieId: movieId }
    })

    for (const list of allCastList) {
      const character = {
        name: castMember.name,
        order: 0,
        alive: true,
        guesslistId: list.id
      }
      const newCharacter = await Character.create(character)
    }

    res.send(castMember)
  } catch (error) {
    throw error
  }
}

const Mortality = async (req, res) => {
  // This might need to find the actor based on movie then actor id.
  try {
    let castMemberId = parseInt(req.params.castmember_id)
    let updateMortality = await CastMember.update(req.body, {
      where: { id: castMemberId },
      returning: true,
      raw: true
    })
    res.send(updateMortality[1])
  } catch (error) {
    throw error
  }
}

const DeleteCastMember = async (req, res) => {
  try {
    let castMemberId = parseInt(req.params.castmember_id)
    await CastMember.destroy({ where: { id: castMemberId } })
    res.send({ message: `Deleted cast member with id of ${castMemberId}` })
  } catch (error) {
    throw error
  }
}

module.exports = {
  GetAllCastMembersByMovieId,
  CreateCastMember,
  Mortality,
  DeleteCastMember
}
