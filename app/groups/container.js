const React = require('react')
const { connect } = require('react-redux')

let groupsData = [{id: 0, name: "group1"}, {id: 1, name: "group2"}, {id: 2, name: "group3"}]
class GroupsContainer extends React.Component {
  render () {
    return <div>
      group list!
      <ul>
        {
          groupsData.map(function(group) {
            return <GroupItem key={group.id} group={group} />
          })
        }
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
  (state) => ({})
)(GroupsContainer)
