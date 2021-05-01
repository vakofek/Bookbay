import { bookService } from '../services/book-service.js'
import { LongText } from '../cmps/LongText.jsx'


export class BookDetails extends React.Component {
   
    state = {
        isLongTextShown: false
    };

    showDescription = () => {
        this.setState({isLongTextShown: !this.state.isLongTextShown})
    }

    render() {
        const { title, authors, pageCount, publishedDate, description, thumbnail } = this.props.book
        const { amount, isOnSale, currencyCode } = this.props.book.listPrice;
        return (
            <div className="book-detail">
                <img src={thumbnail} />
                <div className="detail-container">
                    <p><span>Book Name: </span>{title}</p>
                    <p><span>Author of the book: </span> {authors}</p>
                    <p><span>Publish date: </span> {publishedDate}, {getVeteranBookTitle(publishedDate)}</p>
                    <LongText text={description} isLongTextShown={this.state.isLongTextShown} showDescription={this.showDescription} />
                    <p><span>Reading Time: </span> {getReadingTime(pageCount)} , {pageCount} pages.</p>
                    <p><span>Book Price: </span> <span className={getPriceClass(amount)}>{amount} {bookService.getCurrencyIcon(currencyCode)} </span></p>
                </div>
                <p><span>In stock: </span> <span className={getInStockClass(isOnSale)}>{(isOnSale) ? <i className={'far fa-check-circle'}></i> : <i className="far fa-times-circle"></i>}</span></p>
                <button onClick={this.props.goBack}><i className="fas fa-arrow-left"></i></button>
            </div>
        )
    }
}

function getReadingTime(pageCount) {
    if (pageCount > 500) return 'Long reading';
    else if (pageCount > 200 && pageCount < 500) return 'Decent reading';
    else return 'Light readung';
}

function getVeteranBookTitle(publishedDate) {
    if (publishedDate > 10) return 'Veteran Book';
    else if (publishedDate < 1) return 'New Book!'
    else return;
}

function getPriceClass(amount) {
    if (amount < 20) return 'color-green';
    else if (amount > 150) return 'color-red'
    return;
}

function getInStockClass(onSale) {
    return (onSale) ? 'color-green' : 'color-red';
}