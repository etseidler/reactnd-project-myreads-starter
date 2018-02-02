import React from 'react'
import { Link } from 'react-router-dom'
import Bookshelf from './Bookshelf'
import AppHeader from './AppHeader'

function BookshelfList({ bookshelves, books, moveToShelf }) {
  return (
    <div className="list-books">
      <AppHeader />
      <div>
        {bookshelves.map(bookshelf => (
          <Bookshelf
            key={bookshelf.name}
            title={bookshelf.displayName}
            books={books.filter(book => book.bookshelf === bookshelf.name)}
            moveToShelf={moveToShelf}
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