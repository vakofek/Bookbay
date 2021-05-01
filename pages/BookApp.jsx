import { bookService } from '../services/book-service.js'
import { BookList } from '../cmps/BookList.jsx'
import { BookDetails } from '../cmps/BookDetails.jsx'
import { BookFilter } from '../cmps/BookFilter.jsx'


export class BookApp extends React.Component {

    state = {
        books: null,
        filterBooksBy: null,
        selectedBook: null
    };

    componentDidMount() {
        this.loadBooks()
    }

    loadBooks() {
        bookService.query(this.state.filterBooksBy).then(books => {
            this.setState({ books })
        })
    }

    setSelectedBook = (selectedBook) => {
        this.setState({ selectedBook })
    }

    onSetFilter = (filterBooksBy) => {
        this.setState({ filterBooksBy }, this.loadBooks)
    }



    render() {
        const { books, selectedBook } = this.state

        if (!books) return <div>Loading...</div>

        return (
            <section>
                <header>
                    <h2 className="logo">Bookbay</h2>
                </header>

                {!selectedBook && <React.Fragment>
                    <BookFilter onSetFilter={this.onSetFilter} />
                </React.Fragment>}
                {!selectedBook && <React.Fragment>
                    <BookList books={books} setSelectedBook={this.setSelectedBook} />
                </React.Fragment>}


                { selectedBook && <BookDetails book={selectedBook} goBack={() => this.setSelectedBook(null)} />}

            </section>
        );
    }



}