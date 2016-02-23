import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import ShoppingList from 'app/shopping-list/components/shopping-list'
import Item from 'app/shopping-list/components/item'
import * as ShoppingListActions from 'app/shopping-list/actions'

class ShoppingListContainer extends React.Component {

  static propTypes = {
    shoppingList: PropTypes.object.isRequired,
    shoppingActions: PropTypes.object.isRequired
  }

  render () {
    const { group, shoppingList, shoppingActions } = this.props
    return (
      <div>
        <ShoppingList group={ group }
                      shoppingList={ shoppingList }
                      shoppingActions={ shoppingActions } />
        <Item shoppingList={ shoppingList } shoppingActions={ shoppingActions } />
      </div>
    )
  }
}

function mapDispatchToProps (dispatch) {
  return {
    shoppingActions: bindActionCreators(ShoppingListActions, dispatch)
  }
}

// connect(mapStateToProps, mapDispatchToProps)(app)
module.exports = connect(
  (state, ownProps) => {
    const groupId = ownProps.params.id

    return {
      group: state.groups[groupId],
      shoppingList: state.shoppingList
    }
  }, mapDispatchToProps
  )(ShoppingListContainer)