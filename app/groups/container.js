const React = require('react')
const { connect } = require('react-redux')

// let groupsData = [{name: "group1"}, {name: "group2"}, {name: "group3"}]
class GroupsContainer extends React.Component {
  render () {
    return <div>
      group list!
      // groupData.map((group) => return <GroupItem props={group}></GroupItem>)
    </div>
  }
}

// class GroupItem extends React.Component {
// 	render() {
// 		return	<div>
//     		<ul>
//     			<li>data.props.name</li>
//     		</ul>
//     	</div>
//     }
// }

module.exports = connect(
  (state) => ({})
)(GroupsContainer)
