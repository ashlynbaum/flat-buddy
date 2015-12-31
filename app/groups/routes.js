const React = require('react')
const { Route } = require('react-router')

const GroupsContainer = require('./container')

module.exports = function createRoutes (store) {
  return <Route path="/groups" component={GroupsContainer} />
}