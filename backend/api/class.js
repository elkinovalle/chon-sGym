'use strict'

const { Router } = require('express')
const { getLogger, cache } = require('@chons-gym/utils')
const db = require('@chons-gym/db')

const log = getLogger(__dirname, __filename)
const router = new Router()

router.post('/', async function(req, res, next) {
  try {
    const { classsNew } = req.body
    const { Classs } = await db()
    const result = await Classs.createClass(classsNew)
    res.send(result)
  } catch (err) {
    next(err)
  }
})

router.put('/:uuid', async function(req, res, next){
  try {
    const { uuid } = req.params
    const { classsUpdate } = req.body
    const { Classs } = await db()
    const result = await Classs.updateClasss(uuid, classsUpdate)
    res.send(result)
  } catch (err) {
    next(err)
  }
})
router.delete('/:uuid', async function(req, res, next){
  try {
    const { uuid } = req.params
    const { Classs } = await db()
    const result = await Classs.deleteClasss(uuid)
    res.send(result)
  } catch (err) {
    next(err)
  }
})
router.get('/', async function(req, res, next){
  try {
    const { Classs } = await db()
    const result = await Classs.findClasss()
    res.send(result)
  } catch (err) {
    next(err)
  }
})
router.get('/:uuid', async function(req, res, next){
  try {
    const { uuid } = req.params
    const { Classs } = await db()
    const result = await Classs.findClasssUuid(uuid)
    res.send(result)
  } catch (err) {
    next(err)
  }
})

module.exports = router