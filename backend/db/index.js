'use strict'

const { db:config } = require('@chons-gym/config')

//contraladores
const setupUser = require('./lib/users')
const setupProduct = require('./lib/products')
const setupReservation = require ('./lib/reservation')

const setupDatabase = require('./lib/db')
const setupUserModel = require('./models/user.model')
const setupReservationModel = require('./models/reservation.model')
const setupProductModel = require('./models/product.model')
const setupDetail_SaleModel = require('./models/detail_sale.model')
const setupSaleModel = require('./models/sale.model')
const setupCityModel = require('./models/city.model')
const setupClassModel = require('./models/class.model')
const setupCountryModel = require('./models/country.model')
const setupDepartmentModel = require('./models/department.model')
const setupDetail_MembershipModel = require('./models/detail_membership.model')
const setupMembershipModel = require('./models/membership.model')
const setupScheduleModel = require('./models/schedule.model')
const setupType_ClassModel = require('./models/type_class.model')
const setupType_MembershipModel = require('./models/type_merbership.model')
const setupDayModel = require('./models/day.model')

// const setupAgent = require('./lib/agent')

module.exports = async function () {
  const sequelize = setupDatabase(config)
  const UserModel = setupUserModel(config)
  const ReservationModel = setupReservationModel(config)
  const ProductModel = setupProductModel(config)
  const Detail_SaleModel = setupDetail_SaleModel(config)
  const CityModel = setupCityModel(config)
  // const ClassModel = setupClassModel(config)
  // const CountryModel = setupCountryModel(config)
  // const DepartmentModel = setupDepartmentModel(config)
  // const Detail_MembershipModel = setupDetail_MembershipModel(config)
  // const MembershipModel = setupMembershipModel(config)
  const SaleModel = setupSaleModel(config)
  // const ScheduleModel = setupScheduleModel(config)
  // const Type_ClassModel = setupType_ClassModel(config)
  // const Type_MembershipModel = setupType_MembershipModel(config)
  // const DayModel = setupDayModel(config)


  //relaciones de usuario a revervas
  UserModel.hasMany(ReservationModel,{ foreignKey: 'usuarios' })
  ReservationModel.belongsTo(UserModel, { foreignKey: 'empleado' })
  // //relaciones de detalle_ventas a productos
  // ProductModel.hasMany(Detail_SaleModel,{ foreignKey: 'productos'})
  // Detail_SaleModel.belongsTo(ProductModel,{ foreignKey: 'id'})
  // //relaciones de detalle_ventas a ventas 
  // SaleModel.hasMany(Detail_SaleModel,{ foreignKey: 'venta'})
  // Detail_SaleModel.belongsTo(SaleModel,{foreignKey: 'id'})



  //fin de las relaciones

  await sequelize.authenticate()

  if (config.setup) {
    await sequelize.sync({ force: true })
  }

  const User = setupUser(UserModel)
  const Product = setupProduct(ProductModel)
  const Reservation = setupReservation(ReservationModel)
  return {
    async setup() {
      await sequelize.sync({ force: true })
    },
    User,
    Product,
    Reservation
  }
}
