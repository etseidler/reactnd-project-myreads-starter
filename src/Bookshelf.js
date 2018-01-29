import React from 'react'
import Book from './Book'

function Bookshelf({ title, books }) {
  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{title}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          {books.map(book => (
            <li key={book.title}>
              <Book
                title={book.title}
                author={book.author}
                imageURL={book.imageURL}
              />
            </li>
          ))}
        </ol>
      </div>
    </div>
  )
}

export default Bookshelf