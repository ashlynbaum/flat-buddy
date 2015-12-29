const React = require('react')
const { IndexLink, Link } = require('react-router')

const style = require('./nav.css')

class Nav extends React.Component {
	render () {
		return <div className={style.container}>
			<IndexLink to="/" className={style.home}>home</IndexLink>
			<Link to="/user" className={style.user}>user</Link>
		</div>
	}
}

module.exports = Nav