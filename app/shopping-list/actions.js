/* Action Type */
export const ADD_LIST_ITEM = "ADD_LIST_ITEM"
export const EDIT_LIST_ITEM = "EDIT_LIST_ITEM"
export const DELETE_LIST_ITEM = "DELETE_LIST_ITEM"
export const PURCHASE_LIST_ITEM = "PURCHASE_LIST_ITEM"

/* Action Creators */
export function addListItem(text) {
  return {
    type: ADD_LIST_ITEM,
    text
  }
}

export function editListItem(id, text) {
  return {
    type: EDIT_LIST_ITEM,
    id,
    text
  }
}

export function deleteListItem(id) {
  return {
    type: DELETE_LIST_ITEM,
    id
  }
}

export function purchaseListItem(id) {
  return {
    type: PURCHASE_LIST_ITEM,
    id
  }
}
