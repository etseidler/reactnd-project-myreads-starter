export const normalizeBooks = (books) => {
  return books.map(({ id, title, authors, imageLinks, shelf }) => ({
    id,
    title,
    author: authors ? authors[0] : 'UNKNOWN',
    imageURL: imageLinks.thumbnail,
    bookshelf: shelf
  }))
}