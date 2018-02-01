import React, { Component } from 'react'

class ShelfSelect extends Component {
  constructor(props) {
    super(props)

    this.state = {
      bookshelf: this.props.bookshelf,
      moveToShelf: this.props.moveToShelf
    }

    this.bookId = this.props.bookId
    this.handleChange = this.handleChange.bind(this)
  }
  componentWillReceiveProps({ bookshelf, moveToShelf }) {
    if (bookshelf !== this.state.bookshelf) {
      this.setState({ bookshelf })
    }
    if (moveToShelf !== this.state.moveToShelf) {
      this.setState({ moveToShelf })
    }
  }
  handleChange(event) {
    this.state.moveToShelf(this.bookId, event.target.value)
  }
  render() {
    return (
      <select onChange={this.handleChange} value={this.state.bookshelf} >
        <option value="disabled" disabled>Move to...</option>
        <option value="currentlyReading">Currently Reading</option>
        <option value="wantToRead">Want to Read</option>
        <option value="read">Read</option>
        {this.state.bookshelf !== 'none' ?
          <option value="none">None</option> :
          <option value="none" disabled>None</option>
        }
      </select>
    )
  }
}

export default ShelfSelect