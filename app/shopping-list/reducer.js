module.exports = shoppingListReducer

import cuid from 'cuid'
const { max, keys } =  require('lodash')

import { ADD_LIST_ITEM, EDIT_LIST_ITEM, DELETE_LIST_ITEM, PURCHASE_LIST_ITEM } from 'app/shopping-list/actions'


let initialState = {
 0: {
    text: "first shopping item",
    purchased: false
  }
}

export default function shoppingListReducer(state = initialState, action) {
  switch(action.type) {
    case ADD_LIST_ITEM:
      const id = max(keys(state)) + 1
      console.log("state id: ", id)
      return {
        ...state,
        [id]: {
          text: action.text,
          purchased: false
        }
      }
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
