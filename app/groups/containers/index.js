const React = require('react')
const { connect } = require('react-redux')
const { map, values } = require('ramda')

const GroupsListItem = require('../components/groups-list-item')

class GroupsContainer extends React.Component {
  render () {
    const { groups } = this.props

    const mapGroupItems = map(function(group) {
      return <GroupsListItem key={group.id} group={group} />
    })

    return <div>
      group list!
      <ul>
        { values(mapGroupItems(groups)) }
      </ul>
    </div>
  }
}


module.exports = connect(
  (state) => ({
    groups: state.groups
  })
)(GroupsContainer)
