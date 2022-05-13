const { User } = require('../models')

const GetAllUsers = async (req, res) => {
  try {
    let users = await User.findAll()
    res.send(users)
  } catch (error) {
    throw error
  }
}

module.exports = {
  GetAllUsers
}
