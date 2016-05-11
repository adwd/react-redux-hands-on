import Router from 'koa-router'
import usersApi from './users'
import eventsApi from './events'
import todosApi from './todos'

const api = new Router({
  prefix: '/api'
})

api.use('/users', usersApi.routes())
api.use('/events', eventsApi.routes())
api.use('/todos', todosApi.routes())

export default api
