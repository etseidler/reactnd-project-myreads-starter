export const normalizeBooks = (books) => {
  if (books.error) {
    return []
  }
  const multipleAuthorReducer = (acc, curr) => `${acc} and ${curr}`
  return books.map(({ id, title, authors, imageLinks, shelf }) => ({
    id,
    title,
    author: authors ? authors.reduce(multipleAuthorReducer) : 'UNKNOWN',
    imageURL: imageLinks ? imageLinks.thumbnail : '',
    bookshelf: shelf
  }))
}

export const getExistingShelf = (books, book) => {
  const bookOnShelf = books.find(b => b.id === book.id)
  return bookOnShelf && bookOnShelf.bookshelf
}