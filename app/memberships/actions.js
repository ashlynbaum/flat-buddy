/* Action Type */
export const ADD_MEMBER = "ADD_MEMBER"

/* Action Creators */
export function addMember(memberId, groupId) {
  return {
    type: ADD_MEMBER,
    memberId,
    groupId
  }
}