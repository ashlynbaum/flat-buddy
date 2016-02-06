module.exports = peopleReducer

let initialState = {
  0: { id: 0, name: "Ashlyn" },
  1: { id: 1, name: "Mikey" },
  2: { id: 2, name: "Eugene" }
}

function peopleReducer (state = initialState, action) {
  switch (action.type) {
    default:
      return state
  }
}
