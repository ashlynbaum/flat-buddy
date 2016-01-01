const React = require('react')

const style = require('./group-display.css')
const BudgetValue = require('./budget-value')

class GroupDisplay extends React.Component {
  render() {
    const { group } = this.props

    return (
          <div> 
            <h2>{ group.name }</h2>
            <BudgetValue />
          </div>
    )
  }
}

module.exports = GroupDisplay
