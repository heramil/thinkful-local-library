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
  const popularAuthors = authors.map(author => {
    const authorName = `${author.name.first} ${author.name.last}`;
    const booksBy = books.filter(book => book.authorId === author.id);
    const borrows = booksBy.reduce((total, book) => total + book.borrows.length, 0);

    const authorInfo = {
      name: authorName,
      count: borrows,
    };
    return authorInfo;
   })
   popularAuthors.sort((authA, authB) => authB.count - authA.count);
   popularAuthors.splice(5);
   return popularAuthors;
};

module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
