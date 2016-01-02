const React = require('react')
const { connect } = require('react-redux')

const Nav = require('app/nav/components/nav')

class LayoutContainer extends React.Component {
  render () {
    const { children } = this.props

    return <div>
      <Nav />
      { children }
    </div>
  }
}

module.exports = connect(
  (state) => ({})
)(LayoutContainer)
