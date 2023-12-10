import { Link } from 'react-router-dom';


const BookDetail = (props) => {
    const { showAuthorName, item } = props;

    // const bookAuthor = authors.find(k => k.id === item.author);

    const getShortText = (text, slice) => {
        return text.length > slice ? text.substring(0, slice) + '...' : text;
    }
    // console.log('item genres: ', item.genres);
    let bookAuthor;
    if (item && item.authorId && item.authorId.userId) {
        bookAuthor = item.authorId.userId;
    }
    console.log('item: ', item)

    return (
        <div className='book-preview-wrapper'>
            <div className='book-preview'>
                <div className='book-preview-title'>
                    {item.bookName && getShortText(item.bookName, 18)}
                </div>
                <div className="book-preview-img-wrapper">
                    <img className='' src={`/books/${item.picture}`} alt={item.bookName}/>
                    <div className='book-preview-genres'>
                        {
                            item.genres.map((genre, index) => {
                                return (
                                    <div className='card-item' key={`genre_${index}`}>
                                        {genre.title}
                                    </div>
                                )
                            })
                        }
                    </div>
                    {
                        showAuthorName && bookAuthor &&
                        <div className="book-preview-author"> 
                            {bookAuthor.firstName} {bookAuthor.lastName}
                        </div>     
                    }
                </div>
                <div className="book-preview-buy">
                    <p className=''>
                        {item.price} грн
                    </p>
                    <Link to={`/book/${item._id}`}>
                        <button>
                            Купить
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default BookDetail;
