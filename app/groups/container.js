const React = require('react')
const { connect } = require('react-redux')
const { map, values } = require('ramda')

class GroupsContainer extends React.Component {
  render () {
    const { groups } = this.props

    const mapGroupItems = map(function(group) {
      return <GroupItem key={group.id} group={group} />
    })

    return <div>
      group list!
      <ul>
        { values(mapGroupItems(groups)) }
      </ul>
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
  (state) => ({
    groups: state.groups
  })
)(GroupsContainer)
