function findAccountById(accounts, id) {
  return accounts.find((account) => account.id.includes(id))
};

function sortAccountsByLastName(accounts) {
  return accounts.sort((acA, acB) =>
  acA.name.last.toLowerCase() > acB.name.last.toLowerCase() ? 1: -1)
};

function getTotalNumberOfBorrows(account, books) {
  let result = 0;
  const booksBorrowedByAccount = books.forEach((book) => {

    if (!!book.borrows) {
        book.borrows.forEach((accounts) => {
        if (accounts.id === account.id) {
            result++;
        }
    });
    }

});
return result;
};

function getBooksPossessedByAccount(account, books, authors) {
  let booksOut = []
  books.forEach(book => {
    if (book.borrows.find(borrow => borrow.id === account.id && borrow.returned === false)){
      booksOut.push(book)
    }
  });
  
  booksOut.forEach(book => {
    let scribe = authors.find(author => 
    author.id === book.authorId)
    book.author = scribe
  });
  return booksOut
};

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
