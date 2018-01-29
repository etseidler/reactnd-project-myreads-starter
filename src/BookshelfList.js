import React from 'react'
import { Link } from 'react-router-dom'
import Bookshelf from './Bookshelf'

function BookshelfList({ bookshelves, books, changeShelf }) {
  return (
    <div className="list-books">
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>
      <div>
        {bookshelves.map(bookshelf => (
          <Bookshelf
            key={bookshelf.name}
            title={bookshelf.displayName}
            books={books.filter(book => book.bookshelf === bookshelf.name)}
            changeShelf={changeShelf}
          />
        ))}
      </div>
      <div className="open-search">
        <Link to='/search'>Add a book</Link>
      </div>
    </div>
  )
}

export default BookshelfList