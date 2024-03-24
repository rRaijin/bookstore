import { useContext } from 'react';
import { Link } from 'react-router-dom';

import { MyAnotherContext } from '../../MyContext';


const BookDetail = (props) => {
    const { item, genres, authors, showAuthorName, stars } = props;
    const { localCtxCount, changeLocalCtxCount } = useContext(MyAnotherContext);

    const filteredGenres = genres.filter(g => item.genre.indexOf(g.id) !== -1);
    const bookAuthor = authors.find(k => k.id === item.author);

    const getShortText = (text, slice) => {
        // changeLocalCtxCount(localCtxCount + 1);
        return text.length > slice ? text.substring(0, slice) + '...' : text;
    }
    // console.log('showAuthorName: ', showAuthorName);

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
                            filteredGenres.map((genre, index) => {
                                return (
                                    <div className='card-item' key={`genre_${index}`}>
                                        {genre.title}
                                    </div>
                                )
                            })
                        }
                    </div>
                    {
                        showAuthorName &&
                        <div className="book-preview-author"> 
                            {bookAuthor.firstName} {bookAuthor.lastName}
                        </div>     
                    }
                </div>
                <div className='book-preview-stars'>
                    {stars.map((k, i) => <img className='' src="/books/star.png" alt={`star-${i}`}/>)}
                </div>
                <div className="book-preview-buy">
                    <p className='' onClick={() => {
                        console.log('localCtxCount: ', localCtxCount)
                        return changeLocalCtxCount(localCtxCount + 1)
                        }}>
                        {item.price} грн
                    </p>
                    <Link to={`/book/${item.id}`}>
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
