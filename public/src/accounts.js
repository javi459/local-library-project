function findAccountById(accounts, id) {
  return accounts.find((account) => account.id === id)
}

function sortAccountsByLastName(accounts) {
  let result = [...accounts];
  return result.sort((account1, account2) => account1.name.last > account2.name.last ? 1 : -1);  
}

function getTotalNumberOfBorrows(account, books) {
  let total = 0;
  let accountID = account.id;
   return books.reduce((total, {borrows}) => {
     if (borrows.some((currentBook) => currentBook.id === accountID)) total++
       return total; 
 }, 0) 
}

function getBooksPossessedByAccount(account, books, authors) {
  let result = [];
  books.forEach(book => {
    let borrowedBooks = book.borrows;
    if (borrowedBooks.find(borrow => borrow.id === account.id && borrow.returned === false)) {
      result.push(book);
    }
  })
  result.forEach(book => {
    let author = authors.find(person => person.id === book.authorId);
    book['author'] = author;
  })
  return result;
}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
