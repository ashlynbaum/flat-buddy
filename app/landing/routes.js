const React = require('react')
const { IndexRoute } = require('react-router')

const LandingContainer = require('./container')

module.exports = function createRoutes (store) {
  return <IndexRoute component={LandingContainer} />
}