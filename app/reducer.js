const bulk = require('bulk-require')
const { combineReducers } = require('redux')
const { routeReducer } = require('redux-simple-router')
const { map } = require('ramda')
const { mapKeys, mapValues, assign, camelCase } = require('lodash')

module.exports = combine(assign(
  mapValues(
    bulk(__dirname, '*/reducer.js'),
    (module) => module.reducer
  ),
  //mapValues(
  //  bulk(__dirname, '*/reducers/*.js'),
  //  (module) => combineReducers(module.reducers)
  //),
  {
    routing: routeReducer
  }
))

function combine (reducers) {
  return combineReducers(
    mapKeys(reducers, function (reducer, name) {
      return camelCase(name)
    })
  )
}