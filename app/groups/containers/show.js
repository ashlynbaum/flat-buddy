const React = require('react')
const { connect } = require('react-redux')

const GroupDisplay = require('../components/group-display')
const GroupNav = require('../components/group-nav')

class GroupsContainer extends React.Component {
  render () {
    const { group, children } = this.props

    return <div>
      <GroupDisplay group={group} />
      <GroupNav group={group} />
      { children }
    </div>
  }
}

module.exports = connect(
  (state, ownProps) => ({
    group: state.groups[ownProps.params.id]
  })
)(GroupsContainer)
