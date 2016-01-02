const React = require('react')
import MemberList from 'app/groups/components/member-list'

class GroupMembers extends React.Component {
  render () {
    const { members, people } = this.props

    const mapMembers = members.map(function(member) {
      return <MemberList name={ people[member].name } />
    })

    return (
      <div>
        <ul>
          { mapMembers }
        </ul>
      </div>
    )
  }
} 



module.exports = GroupMembers