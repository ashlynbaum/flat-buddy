module.exports = groupsReducer

function groupsReducer (state = {}, action) {
  switch (action.type) {
    case 'CREATE_GROUP':
      return {
        ...state,
        [action.payload.id]: action.payload
      }
    default:
      return state
  }
}
