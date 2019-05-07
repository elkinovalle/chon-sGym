'use strict'

const { getLogger } = require('@chons-gym/utils')
const user = require('./user')
const product = require('./product')
const reservation = require ('./reservation')
const schedule = require ('./schedule')
const sale = require ('./sale')
const membership = require ('./membership')
const classs = require ('./classs')

const log = getLogger(__dirname, __filename)
// prueba
module.exports = {
  home (req, res) {
    res.send({
      user: '/user',
    })
  },
  user,
  product,
  reservation,
  schedule,
  sale,
  membership,
  classs,
  errorHandler (err, req, res, next) {
    if (err) {
      let code = err.code || 500
      const { id } = req
      const { message, stack } = err
      log.debug({ id, message: stack })
      log.error({ id, message })
      res.status(code).send({ error: message })
      return
    }

    next()
  }
}
