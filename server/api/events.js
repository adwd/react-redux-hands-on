/*
  event data api
*/
import Router from 'koa-router'
import bodyParser from 'koa-bodyparser'
import { delay } from './utils'

const route = new Router()
let events = [
  { title: 'react meet up', creatorId: 1, date: '5/11' },
  { title: 'USE SCALA.JS', creatorId: 2, date: '5/22' }
]

route.get('/', (ctx, next) => {
  return delay(2000).then(() => {
    ctx.body = events
  })
})

route.post('/add', bodyParser(), (ctx, next) => {
  const { title, creatorId, date } = ctx.request.body
  if (title && creatorId) {
    events.push({
      title,
      creatorId,
      date
    })

    ctx.status = 200
    ctx.body = 'succeeded to add event'
  } else {
    ctx.status = 404
    ctx.body = 'failed to add event'
  }
})

export default route
