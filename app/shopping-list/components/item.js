import React, { PropTypes } from 'react'
import { map } from 'lodash'

export default class Item extends React.Component {
  render () {
    const { shoppingList } = this.props
    const mapItems = map( shoppingList, function (item) {
      return (
        <li purchased={ item.purchased } key={item.id} >
            { item.text }
            </li>
      )
    })

  return (
    <div>
      <ul>
      { mapItems }
      </ul>
    </div>
  )
  }
}