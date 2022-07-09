function getTotalBooksCount(books) {
  return books.length
};

function getTotalAccountsCount(accounts) {
  return accounts.length
};

function getBooksBorrowedCount(books) {
  const bookOut = books.filter(book => book.borrows[0].returned === false)
  return bookOut.length
};

function _sortAndSlice(arr) {
  let result = arr.sort((inputA, inputB) =>
  inputB.count - inputA.count).slice(0, 5)
  return result
};

function getMostCommonGenres(books) {
  let genres = []
  books.forEach(book => {
  const match = genres.find(genre =>
    genre.name === book.genre)
    if (match) {
      match.count++
    } else {
      const name = book.genre
      genres.push({name, count: 1})
    }
});
genres = _sortAndSlice(genres)
return genres
};

function getMostPopularBooks(books) {
  let titleAndCount = [];
  books.forEach((book) => {
  const popularBooksArray = { name: book.title, count: book.borrows.length }
  titleAndCount.push(popularBooksArray)
  })
  titleAndCount = _sortAndSlice(titleAndCount)
  return titleAndCount
};

function getMostPopularAuthors(books, authors) {
  let popularAuthors = books.map((book) => {
  const author = authors.find((author) => author.id === book.authorId)
  return {
    name: `${author.name.first} ${author.name.last}`,
    count: book.borrows.length
  }
});
  popularAuthors = _sortAndSlice(popularAuthors)
  return popularAuthors
};

module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
