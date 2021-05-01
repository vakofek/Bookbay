import { bookService } from '../services/book-service.js'

export function BookPreview({ book ,setSelectedBook}) {
    const { title, thumbnail } = book;
    const { amount, currencyCode } = book.listPrice;
    return (
        <div className="book-preview" onClick={() => { setSelectedBook(book)}}>
            <img src={thumbnail}  />
            <span name="book-name">{title}</span>
            <span>Price: {amount} {bookService.getCurrencyIcon(currencyCode)}</span>
        </div>
    )
}


