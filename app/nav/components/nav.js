const React = require('react')
const { IndexLink, Link } = require('react-router')

const style = require('./nav.css')

class Nav extends React.Component {
	render () {
		return <div className={style.container}>
			<IndexLink to="/" className={style.home}>HappyFlat</IndexLink>
			<Link to="/user" className={style.user}><img src={'https://placebear.com/50/50'} alt="user-name" className="user-menu"/></Link>
		</div>
	}
}

module.exports = Nav