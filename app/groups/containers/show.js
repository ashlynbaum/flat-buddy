import React, { PropTypes } from 'react'
const { connect } = require('react-redux')
import { bindActionCreators } from 'redux'


const GroupDisplay = require('../components/group-display')
const GroupNav = require('../components/group-nav')
const { getMembersByGroupId } = require('../getters')

import { addMember } from 'app/memberships/actions'
import * as ShoppingListActions from 'app/shopping-list/actions'

class ShowGroupsContainer extends React.Component {
  addMember = (memberId) => {
    this.props.dispatch(
      addMember(
        memberId,
        this.props.group.id
      )
    )
  }

  static propTypes = {
    shoppingList: PropTypes.array.isRequired,
    shoppingActions: PropTypes.object.isRequired
  }

  render () {
    const { group, children, members, people, shoppingList, shoppingActions } = this.props

    return <div>
      <GroupDisplay group={group} />
      <GroupNav group={group} />
      {
        // this.props.children
        React.Children.map(children, (child) => ({
          ...child,
          props: {
            ...child.props,
            members,
            people,
            addMember: this.addMember,
            shoppingList: shoppingList,
            shoppingActions: shoppingActions
          }
        }))
      }
    </div>
  }
}

function mapDispatchToProps (dispatch) {
  return {
    shoppingActions: bindActionCreators(ShoppingListActions, dispatch)
  }
}

// connect(mapStateToProps, mapDispatchToProps)(app)
module.exports = connect(
  (state, ownProps) => {
    const groupId = ownProps.params.id

    return {
      group: state.groups[groupId],
      members: getMembersByGroupId(state)[groupId],
      people: state.people,
      shoppingList: state.shoppingList
    }
  }, mapDispatchToProps
)(ShowGroupsContainer)
