const AdminBooksList = ({ books, onBookSelected }) => {

    return (
        <div className='admin-books-list-wrapper'>
            <ul className='admin-books-list'>
                {
                    books.map((book, i) =>
                        <BookItemPreview
                            key={`book-tem-${i}`}
                            book={book}
                            onBookSelected={onBookSelected}/>
                    )
                }
            </ul>
        </div>
    )
}

const BookItemPreview = (props) => {
    const { book, onBookSelected } = props;
    const userObj = book?.authorId?.userId; // book && book.authorId && 
    console.log('book a: ', userObj)
    const fullUsername = userObj ? userObj.firstName + ' ' + userObj.lastName : '';

    return (
        <li className='pointer' onClick={() => onBookSelected(book)}>
            <p className='bookName'>
                {book.bookName}
            </p>
            <p className='bookAuthor'>
                {fullUsername}
            </p>
            <p className='flex w-full'>
                <p className='bookPrice w-50p'>
                    <span className=''>Price:</span>
                    <span className=''>{book.price}</span>
                </p>
                <p className='bookYear w-50p'>
                    <span className=''>Year:</span>
                    <span className=''>{book.year}</span>
                </p>
            </p>
        </li>
    )
}


export default AdminBooksList;
