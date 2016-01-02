module.exports = membershipsReducer

let initialState = {
  0: { id: 0, memberId: 0, groupId: 0 },
  1: { id: 1, memberId: 1, groupId: 0 },
  2: { id: 2, memberId: 2, groupId: 0 }
}

function membershipsReducer (state = initialState, action) {
  switch (action.type) {
    default:
      return state
  }
}
