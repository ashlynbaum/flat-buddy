const React = require('react')

export default class MemberList extends React.Component {
  render() {
    const name = this.props.name
    return <li key={this.props.id} > { name } </li>
  }
}
