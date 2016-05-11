import axios from 'axios'

const actionTypeCreator = (type) => ({
  REQUEST: `${type}_REQUEST`,
  SUCCESS: `${type}_SUCCESS`,
  FAILURE: `${type}_FAILURE`
})

// Constants
export const types = {
  add: actionTypeCreator('ADD_TODO'),
  remove: actionTypeCreator('REMOVE_TODO'),
  edit: 'EDIT_NEW_TODO'
}

// Actions
const actionCreator = (type) => ({
  request: () => ({ type: type.REQUEST }),
  success: (data) => ({ type: type.SUCCESS, data }),
  failure: (error) => ({ type: type.FAILURE, error })
})

const actions = {
  addTodo: actionCreator(types.add),
  removeTodo: actionCreator(types.remove)
}

export function editTodo (text) {
  return {
    type: types.edit,
    text
  }
}

// Async Actions
export function addTodo (text) {
  return dispatch => {
    dispatch(actions.addTodo.request())
    return axios.post('/api/todos/add', { text })
      .then(response => {
        dispatch(actions.addTodo.success(response.data))
      })
      .catch(e => {
        dispatch(actions.addTodo.failure(e))
      })
  }
}

export function removeTodo (index) {
  return dispatch => {
    dispatch(actions.removeTodo.request())
    return axios.delete(`/api/todos/${index}`)
      .then(response => {
        dispatch(actions.removeTodo.success(response.data))
      })
      .catch(e => {
        dispatch(actions.removeTodo.failure(e))
      })
  }
}
