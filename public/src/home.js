function getTotalBooksCount(books) {  
  let total = 0;
  for (let i = 0; i < books.length; i++) {
    if (books.length > total) total++;
  }
  return total;
}

function getTotalAccountsCount(accounts) {
  let total = 0;
  for (let i = 0; i < accounts.length; i++) {
    if (accounts.length > total) total++;
  }
  return total;
}

function getBooksBorrowedCount(books) {
  let bookCheckedOut = books.filter(book => book.borrows.filter(status => status.returned === false).length > 0);
  return bookCheckedOut.length;
}

function getMostCommonGenres(books) {
  let list = {};
  books.forEach(book => {
    if (list[book.genre]) {
      list[book.genre]++
    } else {
      list[book.genre] = 1;
    }
  })
  return Object.entries(list)
    .map(([name, count]) => {
    return {name, count};
  })
    .sort((first, second) => second.count - first.count)
    .slice(0, 5); 
}

function getMostPopularBooks(books) {
  return books
    .map(book => {
    return {name: book.title, count: book.borrows.length};
  })
    .sort((first, second) => (first.count < second.count ? 1 : -1))
    .slice(0, 5);
}

function getMostPopularAuthors(books, authors) {
  let result = [];
  authors.forEach(author => {
    let currentAuthor = {
      name: `${author.name.first} ${author.name.last}`, count: 0
    };
    books.forEach(book => {
      if (book.authorId === author.id) {
        currentAuthor.count += book.borrows.length;
      }
    });
    result.push(currentAuthor);
  });
  return result.sort((first, second) => second.count - first.count).splice(0, 5);
}

module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
