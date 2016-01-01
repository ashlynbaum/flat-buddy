module.exports = membershipsReducer

let initialState = {
  0: { id: 0, people_id: 0, group_id: 0 },
  1: { id: 1, people_id: 1, group_id: 0 },
  2: { id: 2, people_id: 2, group_id: 0 }
}

function membershipsReducer (state = initialState, action) {
  switch (action.type) {
    default:
      return state
  }
}
