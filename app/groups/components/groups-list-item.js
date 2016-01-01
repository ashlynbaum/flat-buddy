const React = require('react')

const style = require('./groups-list-item.css')
const { Link } = require('react-router')

class GroupsListItem extends React.Component {
  render() {
    const { group } = this.props

    return <li><Link to={`/groups/${ group.id }`}>{ group.name }</Link></li>
  }
}

module.exports = GroupsListItem
