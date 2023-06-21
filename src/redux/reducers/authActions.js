export const authorize = (user, token) => ({
  type: 'AUTHORIZED',
  payload: {
    user,
    token,
  },
})

export const unAuthorize = (error) => ({
  type: 'UNAUTHORIZED',
  payload: error,
})

export const logout = () => ({
  type: 'LOGOUT',
})
