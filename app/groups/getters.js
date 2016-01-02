import { createSelector } from 'reselect'
import { getMemberships } from 'app/memberships/getters'

export const getGroups = ( state ) => state.groups

// each group has many members through memberships
// TODO extract has many through selector creator
// 
// export const getMembersByGroupId = createHasManyThroughSelector(
//  getGroups,
//  getMemberships,
//  'groupId',
//  'memberId'
// )

export const getMembersByGroupId = createSelector (
  getGroups,
  getMemberships,
  (groups, memberships) => {
    const isInGroup = (group) => (membership) => {
      return group.id === membership.groupId
    }
    const toMemberId = (membership) => membership.memberId

    return Object.values(groups).map((group) => {
      return Object.values(memberships)
        .filter(isInGroup(group))
        .map(toMemberId)
    })
  }
)