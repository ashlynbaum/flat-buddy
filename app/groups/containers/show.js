const React = require('react')
const { connect } = require('react-redux')

const GroupDisplay = require('../components/group-display')
const GroupNav = require('../components/group-nav')
const { getMembersByGroupId } = require('../getters')

class GroupsContainer extends React.Component {
  render () {
    const { group, children, members, people } = this.props

    console.log("members", members)
    console.log("children", children)

    return <div>
      <GroupDisplay group={group} />
      <GroupNav group={group} />
      {
        React.Children.map(children, (child) => ({
          ...child,
          props: {
            ...child.props,
            members,
            people
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
