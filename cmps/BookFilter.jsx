
export class BookFilter extends React.Component {
    state = {
        filterBy: {
            title: '',
            price: ''
        }
    }

    handleChange = (ev) => {
        const field = ev.target.name;
        const value = (ev.target.type === 'number') ? +ev.target.value : ev.target.value;
        this.setState({ filterBy: { ...this.state.filterBy, [field]: value } }, () => {
            this.props.onSetFilter(this.state.filterBy)
        })
    }


    onFilter = (ev) => {
        ev.preventDefault();
        this.props.onSetFilter(this.state.filterBy)
    }

    render() {
        const { title, price } = this.state.filterBy
        return (
            <div className="filter-container">
                <form className="book-filter" onSubmit={this.onFilter}>
                    <input type="text" id="byTitle" name="title" placeholder="Enter book name" onChange={this.handleChange} />
                    <input type="number" id="byPrice" name="price" placeholder="Enter price" min={0}  onChange={this.handleChange}/>
                    <button>Filter</button>
                </form>
            </div>
        )
    }
}



