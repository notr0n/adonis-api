'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Shayan extends Model {
    user(){
        return this.belongsTo('App/Models/User','phone','phone').pivotTable('users')
    }
    visa(){
        return this.belongsTo('App/Models/Visa','phone','phone').pivotTable('visas')
    }
}

module.exports = Shayan
