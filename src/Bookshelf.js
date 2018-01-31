import React from 'react'
import Book from './Book'

function Bookshelf({ title, books, moveToShelf }) {
  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{title}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          {books.map(book => (
            <li key={book.id}>
              <Book
                title={book.title}
                author={book.author}
                imageURL={book.imageURL}
                bookshelf={book.bookshelf}
                moveToShelf={moveToShelf}
                id={book.id}
              />
            </li>
          ))}
        </ol>
      </div>
    </div>
  )
}

export default Bookshelf