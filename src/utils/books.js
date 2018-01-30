export const normalizeBooks = (books) => {
  // TODO: handle multiple authors using a template string?
  return books.map(({ id, title, authors, imageLinks, shelf }) => ({
    id,
    title,
    author: authors ? authors[0] : 'UNKNOWN',
    imageURL: imageLinks.thumbnail,
    bookshelf: shelf
  }))
}