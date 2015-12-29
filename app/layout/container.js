const React = require('react')
const { connect } = require('react-redux')

class LayoutContainer extends React.Component {
  render () {
    const { children } = this.props

    return <div>
      <span>hello world!</span>
      { children }
    </div>
  }
}

module.exports = connect(
  (state) => ({})
)(LayoutContainer)
