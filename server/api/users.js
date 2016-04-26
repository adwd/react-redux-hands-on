/*
  user data api
*/
import Router from 'koa-router'
import bodyParser from 'koa-bodyparser'
import { delay } from './utils'

const route = new Router()
let nextId = 2
let users = [
  { id: 0, name: 'bob', age: 20 },
  { id: 1, name: 'tom', age: 22 }
]

// 2秒後ユーザー一覧を返す
route.get('/', (ctx, next) => {
  return delay(2000).then(() => {
    ctx.body = users
  })
})

// ユーザーの追加
route.post('/add', bodyParser(), (ctx, next) => {
  const { name, age } = ctx.request.body
  if (name && age) {
    users.push({ name, age })
    nextId++

    console.log('succeeded to add user')
    ctx.status = 200
    ctx.body = 'succeeded to add user'
  } else {
    console.log('failed to add user')
    ctx.status = 404
    ctx.body = 'failed to add user'
  }
})

export default route
