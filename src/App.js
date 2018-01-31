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
    this.addToShelf = this.addToShelf.bind(this)
    this.normalizeBooks = normalizeBooks.bind(this)
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
  addToShelf(bookId, shelf) {
    const that = this
    BooksAPI.update({ id: bookId }, shelf)
      .then(() => BooksAPI.get(bookId))
      .then(newBook => {
        that.setState({
          books: [...that.state.books, ...that.normalizeBooks([newBook])]
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
                addToShelf={this.addToShelf}
              />
            )}
          />
      </div>
    )
  }
}

export default BooksApp
