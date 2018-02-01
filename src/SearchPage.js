import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Book from './Book'
import * as BooksAPI from './BooksAPI'
import { normalizeBooks, getExistingShelf } from './utils/books'

class SearchPage extends Component {
  constructor(props) {
    super(props)

    this.state = {
      books: [],
      searchValue: ''
    }
    this.addToShelf = props.addToShelf.bind(this)
    this.changeShelf = props.changeShelf.bind(this)
    this.handleSearchInputChange = this.handleSearchInputChange.bind(this)
    this.getExistingShelf = getExistingShelf.bind(this)
  }
  handleSearchInputChange(event) {
    this.setState({ searchValue: event.target.value })
    BooksAPI.search(event.target.value)
      .then(books => this.setState({ books: normalizeBooks(books) }))
  }
  render() {
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link to='/' className="close-search">Close</Link>
          <div className="search-books-input-wrapper">
            {/*
              NOTES: The search from BooksAPI is limited to a particular set of search terms.
              You can find these search terms here:
              https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

              However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
              you don't find a specific author or title. Every search is limited by search terms.
            */}
            <input autoFocus value={this.state.searchValue} onChange={this.handleSearchInputChange} type="text" placeholder="Search by title or author"/>
          </div>
        </div>
        {!this.state.searchValue ?
          null :
          <div className="search-books-results">
            <ol className="books-grid">
              {this.state.books.map(book => (
                <li key={book.id}>
                  <Book
                    title={book.title}
                    author={book.author}
                    imageURL={book.imageURL}
                    bookshelf={this.getExistingShelf(this.props.books, book) || 'none'}
                    moveToShelf={!!this.getExistingShelf(this.props.books, book) ? this.props.changeShelf : this.props.addToShelf}
                    id={book.id}
                  />
                </li>
              ), this)}
            </ol>
          </div>
        }
      </div>
    )
  }
}

export default SearchPage