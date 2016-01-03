const React = require('react')
const { connect } = require('react-redux')

const GroupDisplay = require('../components/group-display')
const GroupNav = require('../components/group-nav')
const { getMembersByGroupId } = require('../getters')

import { addMember } from 'app/memberships/actions'

class GroupsContainer extends React.Component {
  addMember = (member) => {
    this.props.dispatch(addMember(member))
  }

  render () {
    const { group, children, members, people } = this.props

    return <div>
      <GroupDisplay group={group} />
      <GroupNav group={group} />
      {
        React.Children.map(children, (child) => ({
          ...child,
          props: {
            ...child.props,
            members,
            people,
            addMember: this.addMember
          }
        }))
      }
    </div>
  }
}

module.exports = connect(
  (state, ownProps) => {
    const groupId = ownProps.params.id

    return {
      group: state.groups[groupId],
      members: getMembersByGroupId(state)[groupId],
      people: state.people
    }
  }
)(GroupsContainer)
