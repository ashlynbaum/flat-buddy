/* Action Type */
export const ADD_MEMBER = "ADD_MEMBER"

/* Action Creators */
export function addMember(member) {
  return {
    type: ADD_MEMBER,
    member
  }
}