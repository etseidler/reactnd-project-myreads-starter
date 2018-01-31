export const normalizeBooks = (books) => {
  const multipleAuthorReducer = (acc, curr) => `${acc} and ${curr}`
  return books.map(({ id, title, authors, imageLinks, shelf }) => ({
    id,
    title,
    author: authors ? authors.reduce(multipleAuthorReducer) : 'UNKNOWN',
    imageURL: imageLinks.thumbnail,
    bookshelf: shelf
  }))
}

export const bookOnAShelf = (books, book) => {
  return books.find(b => b.id === book.id)
}