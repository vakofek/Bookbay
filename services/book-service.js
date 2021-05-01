import { booksDB } from './data/booksDB.js'
import { utilService } from './util-service.js'
import { storageService } from './storage-service.js'


export const bookService = {
    query,
    getCurrencyIcon
};

const BOOKS_KEY = 'books'
var gBooks;

_createBooks();

function query(filterBy) {
    if (filterBy) {
        var { title, price } = filterBy;
        price = (price) ? price : Infinity;
        const filterdBooks = gBooks.filter(book => {
            return book.title.includes(title) && book.listPrice.amount <= price;
        });
        console.log(filterdBooks);
        return Promise.resolve(filterdBooks);


    }
    return Promise.resolve(gBooks);
}

function getCurrencyIcon(currencyCode) {
    switch (currencyCode) {
        case 'EUR':
            return <i className="fas fa-euro-sign"></i>
        case 'USD':
            return <i className="fas fa-dollar-sign"></i>
        case 'ILS':
            return <i className="fas fa-shekel-sign"></i>
    }
}

// BOOKS DB

function _createBooks() {
    var books = storageService.loadFromStorage(BOOKS_KEY);
    if (!books || !books.length) books = booksDB.getbooks();
    gBooks = books;
    storageService.saveToStorage(BOOKS_KEY, gBooks)
}
