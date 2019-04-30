'use strict'

function setupUser(userModel) {
  async function createUser(user) {
    const result = await userModel.create(user)
    return result.toJSON()
  }
  return{
    createUser
  }
}

module.exports = setupUser