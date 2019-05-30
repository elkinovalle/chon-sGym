'use strict'

const Sequelize = require('sequelize')
const setupDatabase = require('../lib/db')

module.exports = function setupMetricModel (config) {
  const sequelize = setupDatabase(config)
  return sequelize.define('type_class', {
    uuid: {
      type: Sequelize.CHAR(36),
      defaultValue: Sequelize.UUIDV4
    },
    nombre: {
        type: Sequelize.TEXT,
        allowNull: false
    },
    descripcion: {
        type: Sequelize.TEXT
    },
    capacidad:{
      type: Sequelize.INTEGER
    },
    tipoEjercicio:{
      type: Sequelize.INTEGER
    },
    beneficio:{
      type: Sequelize.INTEGER
    }
  })
}