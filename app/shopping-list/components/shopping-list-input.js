const React = require('react')

export default class ShoppingListInput extends React.Component {
  constructor (props) {
    super(props)
    this.state = { text: this.props.text || "" }
  }

  // Define proptypes
  static propTypes = {
    onSave: PropTypes.func.isRequired,
    text: PropTypes.string,
    placeholder: propTypes.string,
    editing: propTypes.bool,
    newShoppingListItem: propTypes.bool
  }

  // Event Listeners
  handleSubmit(e) => {
    const text = e.target.value.trim()
    // on when the enter key is pushed
    if (e.which === 13) {
      this.propr.onSave(text)
      if (this.props.newShoppingListItem) {
        this.setState({ text: "" })
      }
    }
  }

  handleChange(e) => {
    this.setState({ text: e.target.value })
  }

  handleBlur(e) => {
    if (!this.props.newShoppingListItem) {
      this.props.onSave(e.target.value)
    }
  }


  render () {
    const { placeholder }= this.props

    return (
      <input
        type="text"
        placeholder={placeholder}
        autoFocus="true"
        value={this.state.text}
        onBlur={this.handleBlur}
        onChang={this.handleChange}
        onKeyDown={this.handleSubmit}
       />
    )
  }
}
