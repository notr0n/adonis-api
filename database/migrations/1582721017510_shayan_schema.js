'use strict'

const Schema = use('Schema')
class ShayanSchema extends Schema {
    up() {
      this.create('shayans', table => {
        table.integer('id', 6).notNullable()
        table.string('phone', 12)
        table.boolean('verify')
        table.timestamps()
      })
    }
  down () {
    this.drop('shayans')
  }
}

module.exports = ShayanSchema
