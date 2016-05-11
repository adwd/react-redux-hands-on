import axios from 'axios'
import { types } from './others' // todoをAPIで取得する以外の、Todoの追加・更新はothers.jsのほうに書いた

// Constants
const FETCH_TODO_REQUEST = 'FETCH_TODO_REQUEST'
const FETCH_TODO_SUCCESS = 'FETCH_TODO_SUCCESS'
const FETCH_TODO_FAILURE = 'FETCH_TODO_FAILURE'

// Actions
function requestTodo () {
  return {
    type: FETCH_TODO_REQUEST
  }
}

function receiveTodo (todos) {
  return {
    type: FETCH_TODO_SUCCESS,
    todos
  }
}

function failToFetchTodo (error) {
  return {
    type: FETCH_TODO_FAILURE,
    error
  }
}

// Async Actions
export function fetchTodos () {
  return dispatch => {
    dispatch(requestTodo())
    return axios.get('/api/todos')
      .then(response => {
        dispatch(receiveTodo(response.data))
      })
      .catch(e => {
        dispatch(failToFetchTodo(e))
      })
  }
}

// Inital state
export const initialState = {
  newTodo: '',
  todos: [],
  loading: false,

  adding: false,
  removing: false
}

// Reducer
export default function todoReducer (state = initialState, action) {
  switch (action.type) {
    case FETCH_TODO_REQUEST:
      return { ...state, loading: true }

    case FETCH_TODO_SUCCESS:
      return { ...state, loading: false, todos: action.todos }

    case FETCH_TODO_FAILURE:
      return { ...state, loading: false }

    case types.edit:
      return { ...state, newTodo: action.text }

    case types.add.REQUEST:
      return { ...state, adding: true }

    case types.add.SUCCESS:
      return { ...state, adding: false, todos: action.data }

    case types.add.FAILURE:
      return { ...state, adding: false }

    case types.remove.REQUEST:
      return { ...state, removing: true }

    case types.remove.SUCCESS:
      return { ...state, removing: false, todos: action.data }

    case types.remove.FAILURE:
      return { ...state, removing: false }

    default:
      return state
  }
}
