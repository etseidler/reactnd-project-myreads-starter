import React, { Component } from 'react'

class ShelfSelect extends Component {
  constructor(props) {
    super(props)

    this.state = {
      bookshelf: this.props.bookshelf
    }

    this.bookId = this.props.bookId
    this.moveToShelf = this.props.moveToShelf

    this.handleChange = this.handleChange.bind(this)
  }
  handleChange(event) {
    this.moveToShelf(this.bookId, event.target.value)
  }
  render() {
    return (
      <select onChange={this.handleChange} value={this.state.bookshelf} >
        <option value="none" disabled>Move to...</option>
        <option value="currentlyReading">Currently Reading</option>
        <option value="wantToRead">Want to Read</option>
        <option value="read">Read</option>
        <option value="none">None</option>
      </select>
    )
  }
}

export default ShelfSelect