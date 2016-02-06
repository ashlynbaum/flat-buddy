import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import GroupMembers from 'app/groups/components/group-members'
import { getMembersByGroupId } from 'app/groups/getters'
import { addMember } from 'app/memberships/actions'

class GroupMembersContainer extends React.Component {
  addMember = (memberId) => {
    this.props.dispatch(
      addMember(
        memberId,
        this.props.group.id
      )
    )
  }

  render () {
    const { group, members, people } = this.props
    return (
      <GroupMembers group={ group }
                    members={ members }
                    people={ people }
                    addMember={ this.addMember } />
    )
  }
}


// connect(mapStateToProps, mapDispatchToProps)(app)
module.exports = connect(
  (state, ownProps) => {
    const groupId = ownProps.params.id

    return {
      group: state.groups[groupId],
      members: getMembersByGroupId(state)[groupId],
      people: state.people,
    }
  }
)(GroupMembersContainer)