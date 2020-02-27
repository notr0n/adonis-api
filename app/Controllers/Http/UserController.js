'use strict'
const User = use('App/Models/User')
class UserController {
 
  async index ({ request, response, view }) {
  }

  async create ({ request, response, params }) {
      const user = new User()
      user.id = 
      user.phone = params.phone
      user.verify = 0
      await user.save()
  }
  async update ({ params, request, response }) {
  }
  async destroy ({ params, request, response }) {
  }
}

module.exports = UserController
