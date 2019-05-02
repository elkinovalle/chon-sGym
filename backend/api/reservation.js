'use strict'

const { Router } = require('express')
const { getLogger, cache } = require('@chons-gym/utils')
const db = require('@chons-gym/db')

const log = getLogger(__dirname, __filename)
const router = new Router()

router.post('/', async function(req, res, next) {
  try {
    const { reservationNew } = req.body
    const { Reservation } = await db()
    const result = await Product.createProduct(reservationNew)
    res.send(result)
  } catch (err) {
    next(err)
  }
})

router.put('/:uuid', async function(req, res, next){
  try {
    const { uuid } = req.params
    const { reservationUpdate } = req.body
    const { Reservation } = await db()
    const result = await Product.updateProduct(uuid, reservationUpdate)
    res.send(result)
  } catch (err) {
    next(err)
  }
})
router.delete('/:uuid', async function(req, res, next){
  try {
    const { uuid } = req.params
    const { Reservation } = await db()
    const result = await Product.deleteReservation(uuid)
    res.send(result)
  } catch (err) {
    next(err)
  }
})
router.get('/', async function(req, res, next){
  try {
    const { Reservation } = await db()
    const result = await Product.findReservation()
    res.send(result)
  } catch (err) {
    next(err)
  }
})
router.get('/:uuid', async function(req, res, next){
  try {
    const { uuid } = req.params
    const { Reservation } = await db()
    const result = await Product.findReservationUuid(uuid)
    res.send(result)
  } catch (err) {
    next(err)
  }
})

module.exports = router