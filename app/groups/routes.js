import React from 'react'
import { IndexRoute, Route } from 'react-router'

import IndexContainer from './containers/index'
import ShowContainer from './containers/show'
import GroupMembersContainer from 'app/groups/containers/members'
import ShoppingListContainer from 'app/shopping-list/containers/shopping-list'

module.exports = function createRoutes (store) {
  return <Route path="groups">
    <IndexRoute component={IndexContainer} />
    <Route path=":id" component={ShowContainer}>
      <IndexRoute component={GroupMembersContainer} />
      <Route path="list" component={ShoppingListContainer} />
    </Route>
  </Route>
}