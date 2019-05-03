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
      type: Sequelize.TEXT
    },
    nombre: {
      type: Sequelize.TEXT,
      allowNull: false
    },
    apellido: {
      type: Sequelize.TEXT,
      allowNull: false
    },
    rol: {
      type: Sequelize.ENUM('Usuarios','Administrador','Empleado'),
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
    },
    peso: {
      type: Sequelize.DECIMAL(4,1),
    },
    altura: {
      type: Sequelize.DECIMAL(3,2),
    },
    contraseña: {
      type: Sequelize.TEXT,
      alloNull: false
    }

  })
}
