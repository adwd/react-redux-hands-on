import axios from 'axios'

// Constants
export const FETCH_EVENTS_REQUEST = 'FETCH_EVENTS_REQUEST'
export const FETCH_EVENTS_SUCCEEDED = 'FETCH_EVENTS_SUCCEEDED'
export const FETCH_EVENTS_FAILED = 'FETCH_EVENTS_FAILED'

// Actions
function requestFetchEvents () {
  return {
    type: FETCH_EVENTS_REQUEST
  }
}

function receiveEvents (events) {
  return {
    type: FETCH_EVENTS_SUCCEEDED,
    events
  }
}

function failedToFetchEvents (error) {
  return {
    type: FETCH_EVENTS_FAILED,
    error
  }
}

export function fetchEvents () {
  return dispatch => {
    dispatch(requestFetchEvents())

    return axios.get('/api/events/')
      .then(response => {
        console.log('fetch events succeeded', response)
        dispatch(receiveEvents(response.data))
      })
      .catch(e => dispatch(failedToFetchEvents(e)))
  }
}

// Inital state
const initialState = {
  status: 'NOT_LOADED',
  list: []
}

// Reducer
export default function eventsReducer (state = initialState, action) {
  switch (action.type) {
    case FETCH_EVENTS_REQUEST:
      return { status: 'LOADING', list: [] }

    case FETCH_EVENTS_SUCCEEDED:
      return { status: 'LOADED', list: action.events }

    case FETCH_EVENTS_FAILED:
      return { status: 'FAILED', list: [] }

    default:
      return state
  }
}
