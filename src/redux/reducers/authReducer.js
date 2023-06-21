const initialState = {
  authorized: false,
  user: null,
  error: null,
}

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'AUTHORIZED':
      return {
        ...state,
        authorized: true,
        user: action.payload,
        error: null,
      }
    case 'UNAUTHORIZED':
      return {
        ...state,
        authorized: false,
        user: null,
        error: action.payload,
      }
    case 'LOGOUT':
      return {
        ...state,
        authorized: false,
        user: null,
        error: null,
      }
    default:
      return state
  }
}

export default authReducer
