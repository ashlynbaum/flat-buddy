module.exports = groupsReducer

let initialState = {
  0: { id: 0, name: "group1" },
  1: { id: 1, name: "group2" },
  2: { id: 2, name: "group3" }
}

function groupsReducer (state = initialState, action) {
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
