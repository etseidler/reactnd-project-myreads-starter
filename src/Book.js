import React from 'react'
import ShelfSelect from './ShelfSelect'

function Book({ title, author, imageURL }) {
  return (
    <div className="book">
      <div className="book-top">
        <div className="book-cover" style={{ width: 128, height: 192, backgroundImage: `url(${imageURL})` }}></div>
        <div className="book-shelf-changer">
          <ShelfSelect />
        </div>
      </div>
      <div className="book-title">{title}</div>
      <div className="book-authors">{author}</div>
    </div>
  )
}

export default Book