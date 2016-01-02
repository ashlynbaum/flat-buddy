const React = require('react')
const { connect } = require('react-redux')

const authActions = require('app/auth/actions')

const Landing = require('./component')

class LandingContainer extends React.Component {
  render () {
    const { login } = this.props
    return <Landing login={login} />
  }
}

module.exports = connect(
  (state) => ({}),
  { login: authActions.login }
)(LandingContainer)
