function findAuthorById(authors, id) {
  return authors.find(author => author.id === id);
}

function findBookById(books, id) {
  return books.find(book => id === book.id);
}

function partitionBooksByBorrowedStatus(books) {
  let returned = books.filter(book => 
    book.borrows.every(borrowed => borrowed.returned === true));
  
  const notReturned = books.filter(book => 
   book.borrows.some(borrowed => borrowed.returned === false));
  
  var result = [[...notReturned], [...returned]];
  return result;
}

function getBorrowersForBook(book, accounts) {
  let result = [];
  let checkedOut = book.borrows;
  checkedOut.forEach(bookBorrowed => {
    let currentAccount = accounts.find(currentBook => currentBook.id === bookBorrowed.id);
    let object = currentAccount;
    object["returned"] = bookBorrowed.returned;
    result.push(object);
  })
  return result.slice(0, 10);
}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
