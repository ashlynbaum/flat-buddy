const React = require('react')

import ShoppingListInput from 'app/shopping-list/components/shopping-list-input'

export default class ShoppingList extends React.Component {
  // Set proptypes
  static.PropTypes = {

  }
  // action dispatch
  render () {
    const { shoppingList , shoppingActions } = this.props

    return (
      <div>This is a list!
        <ShoppingListInput
          shoppingList={ shoppingList }
          shoppingActions={ shoppingActions }
          placeholder="Add shopping list item."
        />
      </div>
    )
  }
}