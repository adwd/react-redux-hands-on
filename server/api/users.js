import Router from 'koa-router'

const users = new Router()
let data = [
  { name: 'bob', age: 20 },
  { name: 'tom', age: 22 }
]

function delay (msec) {
  return new Promise(function (resolve, reject) {
    setTimeout(resolve, msec)
  })
}

users.get('/', (ctx, next) => {
  return delay(2000).then(() => {
    ctx.body = {
      users: data
    }
  })
})

export default users
