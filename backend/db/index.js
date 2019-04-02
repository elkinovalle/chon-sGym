'use strict'
const setupDatabase = require('./lib/db')
const setupUserModel = require('./models/user.model')
const setupReservationModel = require('./models/reservation.model')

// const setupAgent = require('./lib/agent')

module.exports = async function (config) {
  const sequelize = setupDatabase(config)
  const UserModel = setupUserModel(config)
  const ReservationModel = setupReservationModel(config)

  //relaciones de usuario a revervas
  UserModel.hasMany(ReservationModel,{ foreignKey: 'usuarios' })
  ReservationModel.belongsTo(UserModel, { foreignKey: 'empleado' })

  //fin de las relaciones

  await sequelize.authenticate()

  if (config.setup) {
    await sequelize.sync({ force: true })
  }

  const Agent = {}
  const Metric = {}

  return {
    Agent,
    Metric
  }
}
