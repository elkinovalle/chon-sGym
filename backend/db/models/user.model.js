'use strict'

const Sequelize = require('sequelize')
const setupDatabase = require('../lib/db')

module.exports = function setupMetricModel (config) {
  const sequelize = setupDatabase(config)
  return sequelize.define('user', {
    uuid: {
      type: Sequelize.CHAR(36),
      defaultValue: Sequelize.UUIDV4
    },
    cedula: {
      type: Sequelize.TEXT,
      allowNull: false
    },
    nombre: {
      type: Sequelize.TEXT,
      allowNull: false
    },
    apellido: {
      type: Sequelize.TEXT,
      allowNull: false
    },
    telefono: {
      type: Sequelize.TEXT,
    },
    direccion: {
      type: Sequelize.TEXT
    },
    email: {
      type: Sequelize.TEXT,
      allowNull: false
    },
    genero: {
      type: Sequelize.ENUM('F', 'M') ,
      alloNull: false
    }
  })
}
