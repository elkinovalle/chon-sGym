'use strict'
const setupDatabase = require('./lib/db')
const setupUserModel = require('./models/user.model')
const setupReservationModel = require('./models/reservation.model')
const setupProductModel = require('./models/product.model')
const setupDetail_SaleModel = require('./models/detail_sale.model')


// const setupAgent = require('./lib/agent')

module.exports = async function (config) {
  const sequelize = setupDatabase(config)
  const UserModel = setupUserModel(config)
  const ReservationModel = setupReservationModel(config)
  const ProductModel = setupProductModel(config)
  const Detail_SaleModel = setupDetail_SaleModel(config)
  // const CityModel = setupCityModel(config)
  // const ClassModel = setupClass(config)
  // const CountryModel = setupCountryModel(config)
  // const DepartmentModel = setupDepartmentModel(config)
  // const Detail_MembershipModel = setupDetail_MembershipModel(config)
  // const MembershipModel = setupMembershipModel(config)
  // const SaleModel = setupSaleModel(config)
  // const ScheduleModel = setupScheduleModel(config)
  // const Type_ClassModel = setupType_ClassModel(config)
  // const Type_MembershipModel = setupType_MembershipModel(config)
  // const DayModel = setupDayModel(config)


  //relaciones de usuario a revervas
  UserModel.hasMany(ReservationModel,{ foreignKey: 'usuarios' })
  ReservationModel.belongsTo(UserModel, { foreignKey: 'empleado' })
  
  ProductModel.hasMany(Detail_SaleModel,{ foreignKey: 'productos'})
  Detail_SaleModel.belongsTo(ProductModel,{ foreignKey: 'id'})
  

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
