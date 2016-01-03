const React = require('react')

// include store
import MemberList from 'app/groups/components/member-list'

class GroupMembers extends React.Component {
  addMemberClick = (e) => {
    this.props.addMember({
      name: 'example name'
    })
  }

  render () {
    const { members, people } = this.props

    const mapMembers = members.map(function(member) {
      return <MemberList name={ people[member].name } />
    })

    return (
      <div>
        <button onClick={this.addMemberClick} >
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
