module.exports = authReducer

function authReducer(
  state = { currentUser: null },
  action
) {
  switch (action.type) {
    case "AUTH_LOGIN":
      return {
        ...state,
        currentUser: action.payload
      }
    default:
      return state
  }
} 
