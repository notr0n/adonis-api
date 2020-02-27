'use strict'
const Route = use('Route')

Route.get('/api/sms/:phone', 'ShayanController.create')
Route.get('/api/confirm/:id', 'ShayanController.update')
Route.get('/api/:country/:type','UserController.create')