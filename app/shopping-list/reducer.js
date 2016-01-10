module.exports = shoppingListReducer

import cuid from 'cuid'
import { ADD_LIST_ITEM, EDIT_LIST_ITEM, DELETE_LIST_ITEM, PURCHASE_LIST_ITEM } from 'app/memberships/actions'


let initialState = [
  {
    id: 0,
    text: "first shopping item",
    purchased: false
  }
]

export default function shoppingListReducer(state = initialState, action) {
  switch(action.type) {
    case ADD_LIST_ITEM:
      return state
    case EDIT_LIST_ITEM:
      return state
    case DELETE_LIST_ITEM:
      return state
    case PURCHASE_LIST_ITEM:
      return state
    default:
      return state
  }
}
