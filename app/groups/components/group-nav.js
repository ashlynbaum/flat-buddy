const React = require('react')

const style = require('./group-nav.css')
const {Link} = require('react-router')

class GroupNav extends React.Component {
  render() {
    const { group } = this.props

    return ( 
      <div>
        <TabButton value="Details" link={`/groups/${ group.id }`} />
        <TabButton value="Shopping List" link={`/groups/${ group.id }/list`} />
      </div>
    )
  }
}

class TabButton extends React.Component {
  render () {
    return (
      <button>
        <Link to={this.props.link} >{this.props.value}</Link>
      </button>
    )
  }
}

module.exports = GroupNav