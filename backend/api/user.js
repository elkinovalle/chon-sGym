'use strict'

const { Router } = require('express')
const { getLogger, cache } = require('@chons-gym/utils')
const db = require('@chons-gym/db')

const log = getLogger(__dirname, __filename)
const router = new Router()

router.post('/', async function(req, res, next){
  try {
    const { userNew } = req.body
    const { User } = await db()
    const result = await User.createUser(userNew)
    res.send(result)
  } catch (err) {
    next(err)
  }
})

module.exports = router
