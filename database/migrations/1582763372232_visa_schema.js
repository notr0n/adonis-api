'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class VisaSchema extends Schema {
  up () {
    this.create('visas', (table) => {
      table.increments()
      table.string('phone', 12)
      table.string('country', 12)
      table.string('visa', 12)
      table.string('url', 12)
      table.timestamps()
    })
  }

  down () {
    this.drop('visas')
  }
}

module.exports = VisaSchema
