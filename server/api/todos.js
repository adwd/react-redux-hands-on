/*
  todo api
*/
import Router from 'koa-router'
import bodyParser from 'koa-bodyparser'
import { delay } from './utils'

const route = new Router()
let todos = [
  'learn react asynchronously',
  'learn flux asynchronously',
  'learn redux asynchronously'
]

// 2秒後Todo一覧を返す
route.get('/', (ctx, next) => {
  return delay(2000).then(() => {
    ctx.body = todos
  })
})

// Todoの追加, 2秒後にレスポンスを返す
route.post('/add', bodyParser(), (ctx, next) => {
  return delay(2000).then(() => {
    const { text } = ctx.request.body
    if (text) {
      todos.push(text)
      ctx.status = 200
      ctx.body = todos
    } else {
      ctx.status = 404
      ctx.body = 'failed to add todo'
    }
  })
})

// Todoの削除, 2秒後にレスポンスを返す
route.delete('/:index', (ctx, next) => {
  return delay(2000).then(() => {
    const index = parseInt(ctx.params.index, 10)
    todos = todos.filter((todo, i) => i !== index)
    ctx.status = 200
    ctx.body = todos
  })
})

export default route
