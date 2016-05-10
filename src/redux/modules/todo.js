// Constants
export const ADD_TODO = 'ADD_TODO'
export const REMOVE_TODO = 'REMOVE_TODO'
export const EDIT_NEW_TODO = 'EDIT_NEW_TODO'

// Actions
export function addTodo () {
  return {
    type: ADD_TODO
  }
}

export function removeTodo (index) {
  return {
    type: REMOVE_TODO,
    index
  }
}

export function editNewTodo (text) {
  return {
    type: EDIT_NEW_TODO,
    text
  }
}

// Inital state
const initialState = {
  newTodo: '',
  todos: [
    'learn react',
    'learn flux',
    'learn redux'
  ]
}

// Reducer
export default function todoReducer (state = initialState, action) {
  switch (action.type) {
    case ADD_TODO:
      return { newTodo: '', todos: [...state.todos, state.newTodo] }

    case REMOVE_TODO:
      return { ...state, todos: state.todos.filter((todo, index) => index !== action.index) }

    case EDIT_NEW_TODO:
      return { ...state, newTodo: action.text }

    default:
      return state
  }
}
