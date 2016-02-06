import React, { PropTypes } from 'react'
const { connect } = require('react-redux')
import { bindActionCreators } from 'redux'


const GroupDisplay = require('../components/group-display')
const GroupNav = require('../components/group-nav')

class ShowGroupsContainer extends React.Component {

  render () {
    const { group, children, members, people, shoppingList, shoppingActions } = this.props
    return <div>
      <GroupDisplay group={group} />
      <GroupNav group={group} />
      { children }
    </div>
  }
}


// connect(mapStateToProps, mapDispatchToProps)(app)
module.exports = connect(
  (state, ownProps) => {
    const groupId = ownProps.params.id

    return {
      group: state.groups[groupId],
    }
  }
)(ShowGroupsContainer)
