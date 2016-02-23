module.exports = shoppingListReducer

import cuid from 'cuid'
const { max, keys, omit } =  require('lodash')

import { ADD_LIST_ITEM, EDIT_LIST_ITEM, DELETE_LIST_ITEM, PURCHASE_LIST_ITEM } from 'app/shopping-list/actions'


let initialState = {
 0: {
    id: 0,
    text: "first shopping item",
    purchased: false
  }
}

export default function shoppingListReducer(state = initialState, action) {
  switch(action.type) {
    case ADD_LIST_ITEM:
      const id = cuid()
      return {
        ...state,
        [id]: {
          id: id,
          text: action.text,
          purchased: false
        }
      }
    case EDIT_LIST_ITEM:
      return state
    case DELETE_LIST_ITEM:
      return omit(state, action.id)
    case PURCHASE_LIST_ITEM:
      return state
    default:
      return state
  }
}
