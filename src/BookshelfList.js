import React from 'react'
import Bookshelf from './Bookshelf'

function BookshelfList({ bookshelves, books }) {
  return (
    <div className="list-books">
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>
      <div>
        {bookshelves.map(bookshelf => (
          <Bookshelf key={bookshelf} title={bookshelf} books={books.filter(book => book.bookshelf === bookshelf)} />
        ))}
      </div>
      <div className="open-search">
        {/* TODO: replace with link to Add/Search page */}
        <a onClick={() => {}}>Add a book</a>
      </div>
    </div>
  )
}

export default BookshelfList