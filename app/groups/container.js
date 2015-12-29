const React = require('react')
const { connect } = require('react-redux')

class GroupsContainer extends React.Component {
  render () {
    return <div>
      group list!
    </div>
  }
}

module.exports = connect(
  (state) => ({})
)(GroupsContainer)
