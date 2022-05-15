const { GuessList, Character } = require('../models')

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
    let guessLists = await GuessList.findAll({
      where: { movieId: movieId },
      include: [{ model: Character }],
      order: [['createdAt']]
    })
    res.send(guessLists)
  } catch (error) {
    throw error
  }
}

const DeleteAllListByMovieId = async (req, res) => {
  try {
    const movieId = parseInt(req.params.movie_id)
    let guessLists = await GuessList.destroy({ where: { movieId: movieId } })
    res.send(`All lists deleted for movie id of ${movieId}.`)
  } catch (error) {
    throw error
  }
}

const UpdateGonnerOrder = async (req, res) => {
  try {
    const guessListId = parseInt(req.params.guesslist_id)
    let updateOrder = await GuessList.update(req.body, {
      where: { id: guessListId },
      returning: true
    })
    res.send(updateOrder)
  } catch (error) {
    throw error
  }
}

const UpdateScore = async (req, res) => {
  try {
    console.log('hit')
    const guessListId = parseInt(req.params.guesslist_id)
    const score = req.body.score
    const guessList = await GuessList.findOne({
      where: { id: guessListId }
    })
    const updateScore = guessList.dataValues.score + score
    const updateGuessList = await GuessList.update(
      { score: updateScore },
      {
        where: { id: guessListId },
        include: [{ model: Character }],
        returning: true,
        raw: true
      }
    )
    console.log(updateGuessList, 'updateGuessList71')
    res.status(200).json(updateGuessList)
  } catch (error) {
    throw error
  }
}

const DeleteListByListId = async (req, res) => {
  try {
    const guessListId = parseInt(req.params.guesslist_id)
    let guessLists = await GuessList.destroy({ where: { id: guessListId } })
    res.send(`Deleted list with the id of ${guessListId}`)
  } catch (error) {
    throw error
  }
}

module.exports = {
  CreateGuessList,
  GetGuessListByMovieId,
  DeleteAllListByMovieId,
  UpdateGonnerOrder,
  UpdateScore,
  DeleteListByListId
}
