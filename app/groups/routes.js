import React from 'react'
import { IndexRoute, Route } from 'react-router'

import IndexContainer from './containers/index'
import ShowContainer from './containers/show'
import GroupMembers from './components/group-members'
import ShoppingList from 'app/shopping-list/components/shopping-list'

module.exports = function createRoutes (store) {
  return <Route path="groups">
    <IndexRoute component={IndexContainer} />
    <Route path=":id" component={ShowContainer}>
      <IndexRoute component={GroupMembers} />
      <Route path="list" component={ShoppingList} />
    </Route>
  </Route>
}