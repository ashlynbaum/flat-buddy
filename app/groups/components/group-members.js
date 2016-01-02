const React = require('react')

class GroupMembers extends React.Component {
  render () {
    const { members, people } = this.props
    console.log("props", this.props)
    console.log("group members", members)

    const mapMembers = members.map(function(member) {
      return <MemberName name={ people[member].name } />
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

class MemberName extends React.Component {
  render() {
    const name = this.props.name
    return <li> { name } </li>
  }
}

module.exports = GroupMembers