'use strict'

const pkg = require('../package.json')

const config = {
  db: {
    database: process.env.DB_NAME || 'q3mtjbe5dxcdv0fp',
    username: process.env.DB_USER || 'gnxbjsanlyhhuqzl',
    password: process.env.DB_PASS || 'yu76rd7fqqqshmf5',
    host: process.env.DB_HOST || 'q3vtafztappqbpzn.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
    dialect: 'mysql'
  }
}

Object.assign(config, { pkg })

module.exports = config