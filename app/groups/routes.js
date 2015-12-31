const React = require('react')
const { IndexRoute, Route } = require('react-router')

const IndexContainer = require('./containers/index')
const ShowContainer = require('./containers/show')

module.exports = function createRoutes (store) {
  return <Route path="groups">
  	<IndexRoute component={IndexContainer} />
  	<Route path=":id" component={ShowContainer} />
  </Route>
}