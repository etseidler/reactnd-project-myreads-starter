export const normalizeBooks = (books) => {
  return books.map(({ id, title, authors, imageLinks, shelf }) => ({
    id,
    title,
    author: authors[0],
    imageURL: imageLinks.thumbnail,
    bookshelf: shelf
  }))
}