const React = require('react')

// include store
import MemberList from 'app/groups/components/member-list'

class GroupMembers extends React.Component {
  addMemberClick = (memberId) => {
    return (e) => {
      this.props.addMember( memberId )
    }
  }

  render () {
    const { members, people } = this.props

    const mapMembers = members.map(function(member) {
      return <MemberList name={ people[member].name } />
    })

    return (
      <div>
        <button onClick={this.addMemberClick(1)} >
          Add Member
        </button>
        <ul>
          { mapMembers }
        </ul>
      </div>
    )
  }
}



module.exports = GroupMembers
