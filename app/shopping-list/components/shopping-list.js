import React, { PropTypes } from 'react'

import ShoppingListInput from 'app/shopping-list/components/shopping-list-input'

export default class ShoppingList extends React.Component {
  // Set proptypes
  static propTypes = {
  }

  handleSave = (text) => {
    if (text.length !== 0) {
      this.props.shoppingActions.addListItem(text)
    }
  }

  // action dispatch
  render () {
    const { shoppingList , shoppingActions } = this.props

    return (
      <div>Add item to list:
        <ShoppingListInput newItem
          onSave={ this.handleSave }
          shoppingList={ shoppingList }
          shoppingActions={ shoppingActions }
          placeholder="Add shopping list item."
        />
      </div>
    )
  }
}