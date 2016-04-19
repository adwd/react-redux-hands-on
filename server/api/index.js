import Router from 'koa-router'
import usersApi from './users'

const api = new Router({
  prefix: '/api'
})

api.use('/users', usersApi.routes())

export default api
