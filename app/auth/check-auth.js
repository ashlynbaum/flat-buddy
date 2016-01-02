function checkAuth(store) {
  return function(nextState, replaceState) {
    console.log("nextState:", nextState)
  }
}

module.exports = checkAuth