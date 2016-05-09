import Router from 'koa-router'
import usersApi from './users'
import eventsApi from './events'

const api = new Router({
  prefix: '/api'
})

api.use('/users', usersApi.routes())
api.use('/events', eventsApi.routes())

export default api
