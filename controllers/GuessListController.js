const { GuessList } = require('../models')

const CreateGuessList = async (req, res) => {
  try {
    let guesslistId = parseInt(req.params.guesslist_id)
    const characterBody = {
      guesslistId,
      ...req.body
    }
    const character = Character.create(characterBody)
    res.send(character)
  } catch (error) {}
}

module.exports = {
  CreateGuessList
}
