'use strict'

const Sequelize = require('sequelize')
const setupDatabase = require('../lib/db')

module.exports = function setupMetricModel (config) {
  const sequelize = setupDatabase(config)
  return sequelize.define('product', {
    uuid: {
      type: Sequelize.CHAR(36),
      defaultValue: Sequelize.UUIDV4
    },
    serial: {
      type: Sequelize.TEXT
    },
    nombre: {
        type: Sequelize.TEXT
    },
    marca: {
        type: Sequelize.TEXT
    },
    descripcion: {
        type: Sequelize.TEXT
    }
  })
}