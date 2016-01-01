const React = require('react')
const style = require('./groups-list-item.css')

class GroupsListItem extends React.Component {
  render() {
    const { group } = this.props

    return <li>{ group.name }</li>
  }
}

module.exports = GroupsListItem
