module.exports = membershipsReducer

import cuid from 'cuid'
import { ADD_MEMBER, addMember} from 'app/memberships/actions'

let initialState = {
  0: { id: 0, memberId: 0, groupId: 0 },
  1: { id: 1, memberId: 1, groupId: 0 },
  2: { id: 2, memberId: 2, groupId: 0 }
}

function membershipsReducer (state = initialState, action) {
  switch (action.type) {
    case ADD_MEMBER:
      const id = cuid()
      return {
        ...state,
        [id]: {
          id: id,
          memberId: action.memberId,
          groupId: action.groupId,
        }
      };
    default:
      return state
  }
}
