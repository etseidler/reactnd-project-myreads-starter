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
  constructor(props) {
    super(props)

    this.state = {
      books: []
    }

    this.changeShelf = this.changeShelf.bind(this)
  }
  componentDidMount() {
    BooksAPI.getAll()
      .then(books => this.setState({ books: normalizeBooks(books) }))
  }
  changeShelf(bookId, newShelf) {
    const bookToUpdate = this.state.books.find(b => b.id === bookId)
    bookToUpdate.bookshelf = newShelf
    BooksAPI.update(bookToUpdate, newShelf)
      .then(() => {
        const otherBooks = this.state.books
          .filter(b => b.id !== bookToUpdate.id)
        this.setState({
          books: [...otherBooks, bookToUpdate]
        })
      })
  }
  render() {
    return (
      <div className="app">
          <Route exact path='/'
            render={() => (
              <BookshelfList
                bookshelves={bookshelves}
                books={this.state.books}
                changeShelf={this.changeShelf}
              />
            )}
          />
          <Route path='/search'
            render={() => (
              <SearchPage
                changeShelf={this.changeShelf}
              />
            )}
          />
      </div>
    )
  }
}

export default BooksApp
