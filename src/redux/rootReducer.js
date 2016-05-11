import { combineReducers } from 'redux'
import { routerReducer as router } from 'react-router-redux'
import counter from './modules/counter'
import todo from './modules/todo'
import asyncTodo from './modules/asyncTodo'

export default combineReducers({
  counter,
  todo,
  asyncTodo,
  router
})
