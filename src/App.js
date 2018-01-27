import React from 'react'
import { Route } from 'react-router-dom'
import './App.css'
import BookshelfList from './BookshelfList'
import SearchPage from './SearchPage'
import * as BooksAPI from './BooksAPI'
import { normalizeBooks } from './utils/books'

const bookshelves = [
  {
    name: 'currentlyReading',
    displayName: 'Currently Reading'
  },
  {
    name: 'wantToRead',
    displayName: 'Want to Read'
  },
  {
    name: 'read',
    displayName: 'Read'
  }
]

class BooksApp extends React.Component {
  state = {
    books: []
  }
  componentDidMount() {
    BooksAPI.getAll()
      .then(books => this.setState({ books: normalizeBooks(books) }))
  }
  render() {
    return (
      <div className="app">
          <Route exact path='/'
            render={() => (
              <BookshelfList
                bookshelves={bookshelves} books={this.state.books}
              />
            )}
          />
          <Route path='/search' render={SearchPage} />
      </div>
    )
  }
}

export default BooksApp
