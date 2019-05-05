'use strict'

function setupClasss(classsModel) {
  async function createClasss(classs) {
    const result = await classModel.create(classs)
    return result.toJSON()
  }s
  async function updateClasss(uuid,classs) {
    const cond = { where : { uuid } }
    const result = await classModel.update(classs, cond)
    return result ? classModel.findOne(cond) : new Error('No se actualizo ninguna clase')
  }
  async function deleteClasss(uuid) {
    const cond = { where : { uuid } }
    const result = await classModel.destroy( cond)
    return result ? true : false
  }
  function findClasss() {
    return classModel.findAll()
  }
  function findClasssUuid(uuid) {
    const cond = { where : { uuid } }
    return classModel.findOne(cond)
  }
  return {
    createClasss,
    updateClasss,
    deleteClasss,
    findClasss,
    findClasssUuid
  }
}

module.exports = setupClasss