import React from 'react'
import { Route, Switch } from 'react-router-dom'
import './App.css'
import BookshelfList from './BookshelfList'
import SearchPage from './SearchPage'
import ErrorPage from './ErrorPage'
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
    const that = this
    const bookToUpdate = this.state.books.find(b => b.id === bookId)
    bookToUpdate.bookshelf = newShelf
    BooksAPI.update(bookToUpdate, newShelf)
      .then(() => {
        const otherBooks = that.state.books
          .filter(b => b.id !== bookToUpdate.id)
        that.setState({
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
          <Switch>
            <Route exact path='/'
              render={() => (
                <BookshelfList
                  bookshelves={bookshelves}
                  books={this.state.books}
                  moveToShelf={this.changeShelf}
                />
              )}
            />
            <Route path='/search'
              render={() => (
                <SearchPage
                  books={this.state.books}
                  addToShelf={this.addToShelf}
                  changeShelf={this.changeShelf}
                />
              )}
            />
            <Route component={ErrorPage} />
          </Switch>
      </div>
    )
  }
}

export default BooksApp
