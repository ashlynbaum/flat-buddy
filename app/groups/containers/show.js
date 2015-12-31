const React = require('react')
const { connect } = require('react-redux')

class GroupsContainer extends React.Component {
  render () {
    const { group } = this.props

    return <div>
      the best group!
      <GroupItem group={group} />
    </div>
  }
}

class GroupItem extends React.Component {
  render() {
    const { group } = this.props

    return <li>{ group.name }</li>
  }
}

module.exports = connect(
  (state, ownProps) => ({
    group: state.groups[ownProps.params.id]
  })
)(GroupsContainer)
