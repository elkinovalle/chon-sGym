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
    },
    apellido: {
      type: Sequelize.TEXT
    },
    rol: {
      type: Sequelize.ENUM('cliente','administrador','empleado','proveedor')
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
<<<<<<< HEAD
      type: Sequelize.ENUM('F', 'M'),
      alloNull: false
=======
      type: Sequelize.ENUM('F', 'M') 
>>>>>>> 92306e7169bf199873266bacad81fdba73466f96
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
    },
    empresa:{
      type : Sequelize.TEXT
    }
  })
}
