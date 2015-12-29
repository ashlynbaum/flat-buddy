const React = require('react')

const style = require('./style.css')

class Landing extends React.Component {
  constructor (props) {
    super(props)
    this.login = this.login.bind(this)
  }

  render () {
    return <div className={style.container}>
      <div>username</div>
      <div>password</div>
      <button onClick={this.login}>login</button>
    </div>
  }

  login (ev) {
    this.props.login({
      username: "ashlynbaum",
      name: "Ashlyn",
      password: "password"
    })
  }
}

module.exports = Landing
