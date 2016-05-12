import Router from 'koa-router'
import todosApi from './todos'

const api = new Router({
  prefix: '/api'
})

api.use('/todos', todosApi.routes())

export default api
