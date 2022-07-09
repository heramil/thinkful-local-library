function findAuthorById(authors, id) {
  return authors.find((authors) => authors.id === id)
};

function findBookById(books, id) {
  return books.find((books) => books.id.includes(id))
};

function partitionBooksByBorrowedStatus(books) {
  const unavailable = books.filter(book => book. borrows[0].returned === false)
  const available = books.filter(book => book.borrows[0].returned === true)
  
  return [unavailable, available]
};

function getBorrowersForBook(book, accounts) {
  const { borrows } = book
  const borrowers = borrows.map(({ id, returned}) => {
    const account = accounts.find(account => 
      account.id === id)
    return {
      ...account,
      returned,
    }
  });
  
  return borrowers.slice(0, 10)
};

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
