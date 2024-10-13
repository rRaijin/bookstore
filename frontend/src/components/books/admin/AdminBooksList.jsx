const AdminBooksList = ({ books, onBookSelected }) => {

    return (
        <div className='admin-books-list-wrapper'>
            <ul className='admin-books-list'>
                {
                    books.map((book, i) => {
                        return (
                            <li
                                className='pointer'
                                key={`book-${i}`}
                                onClick={() => onBookSelected(book)}>

                                <div>
                                    <strong>
                                        {book.bookName}
                                    </strong>
                                </div>
                                <div>
                                    Price: {book.price}
                                </div>
                                <div>
                                    Year: {book.year}
                                </div>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}

export default AdminBooksList;
