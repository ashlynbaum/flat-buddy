const React = require('react')
const { Route } = require('react-router')

const TodosContainer = require('./container')

module.exports = function createRoutes (store) {
  return <Route path="todos" component={TodosContainer} />
}