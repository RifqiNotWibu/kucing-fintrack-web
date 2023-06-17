import axios from 'axios'

const BASE_URL = 'http://localhost:3000/'

export const loginSuccess = (user) => ({
  type: 'LOGIN_SUCCESS',
  payload: user,
})

export const loginFailure = (error) => ({
  type: 'LOGIN_FAILURE',
  payload: error,
})

export const logout = () => ({
  type: 'LOGOUT',
})

export const loginAction = (credentials) => {
  return async (dispatch) => {
    try {
      const response = await axios.post(`${BASE_URL}login`, credentials)
      const user = response.data.user

      dispatch(loginSuccess(user))
    } catch (error) {
      dispatch(loginFailure(error.message))
    }
  }
}
