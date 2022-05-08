const { Character } = require('../models')

const CreateCharacter = async (req, res) => {
  try {
    let guesslistId = parseInt(req.params.guesslist_id)
    const characterBody = {
      guesslistId,
      ...req.body
    }
    const character = await Character.create(characterBody)
    res.send(character)
  } catch (error) {
    throw error
  }
}

const SetOrder = async (req, res) => {
  try {
    let charId = parseInt(req.params.character_id)
    let updateOrder = await Character.update(req.body, {
      where: { id: charId },
      returning: true
    })
    res.send(updateOrder)
  } catch (error) {
    throw error
  }
}

const GetAllCharactersByListId = async (req, res) => {
  try {
    let guesslistId = parseInt(req.params.guesslist_id)
    const characters = await Character.findAll({
      where: { guesslistId: guesslistId }
    })
    res.send(characters)
  } catch (error) {
    throw error
  }
}

module.exports = {
  CreateCharacter,
  SetOrder,
  GetAllCharactersByListId
}
