const initialState = {
  loggedIn: false,
  user: null,
  error: null,
}

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOGIN_SUCCESS':
      return {
        ...state,
        loggedIn: true,
        user: action.payload,
        error: null,
      }
    case 'LOGIN_FAILURE':
      return {
        ...state,
        loggedIn: false,
        user: null,
        error: action.payload,
      }
    case 'LOGOUT':
      return {
        ...state,
        loggedIn: false,
        user: null,
        error: null,
      }
    default:
      return state
  }
}

export default authReducer
