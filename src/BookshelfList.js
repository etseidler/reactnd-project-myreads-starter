import React from 'react'
import Bookshelf from './Bookshelf'

function BookshelfList({ bookshelves, books }) {
  return (
    <div>
      {bookshelves.map(bookshelf => (
        <Bookshelf key={bookshelf} title={bookshelf} books={books.filter(book => book.bookshelf === bookshelf)} />
      ))}
    </div>
  )
}

export default BookshelfList