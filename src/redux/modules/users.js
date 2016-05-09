import axios from 'axios'

// Constants
export const FETCH_USERS_REQUEST = 'FETCH_USERS_REQUEST'
export const FETCH_USERS_SUCCEEDED = 'FETCH_USERS_SUCCEEDED'
export const FETCH_USERS_FAILED = 'FETCH_USERS_FAILED'

// Actions
function requestFetchUsers () {
  return {
    type: FETCH_USERS_REQUEST
  }
}

function receiveUsers (users) {
  return {
    type: FETCH_USERS_SUCCEEDED,
    users
  }
}

function failedToFetchUsers (error) {
  return {
    type: FETCH_USERS_FAILED,
    error
  }
}

export function fetchUsers () {
  return dispatch => {
    dispatch(requestFetchUsers())

    return axios.get('/api/users/')
      .then(response => {
        console.log('fetch users succeeded', response)
        dispatch(receiveUsers(response.data))
      })
      .catch(e => dispatch(failedToFetchUsers(e)))
  }
}

// Inital state
const initialState = {
  status: 'NOT_LOADED',
  list: []
}

// Reducer
export default function usersReducer (state = initialState, action) {
  switch (action.type) {
    case FETCH_USERS_REQUEST: {
      // 既にロード済みなら何もしない
      if (state.status === 'LOADED') {
        return state
      }

      return { status: 'LOADING', list: [] }
    }

    case FETCH_USERS_SUCCEEDED:
      return { status: 'LOADED', list: action.users }

    case FETCH_USERS_FAILED:
      return { status: 'FAILED', list: [] }

    default:
      return state
  }
}
