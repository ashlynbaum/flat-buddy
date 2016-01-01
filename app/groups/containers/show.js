const React = require('react')
const { connect } = require('react-redux')

const GroupDisplay = require('../components/group-display')

class GroupsContainer extends React.Component {
  render () {
    const { group } = this.props

    return <div>
      <GroupDisplay group={group} />
    </div>
  }
}

module.exports = connect(
  (state, ownProps) => ({
    group: state.groups[ownProps.params.id]
  })
)(GroupsContainer)
