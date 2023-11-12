import { withRouter } from '../hocs/withRouter';
import authors from '../mock/authors.json';
import books from '../mock/books.json';
import genres from '../mock/genres.json';
import BookPreview from '../components/books/BookPreview';

const GenreDetail = (props) => {
    console.log('render: ', props);
    const genreId = Number(props.router.params.id);
    const booksByGenre = books.filter(book => book.genre.includes(genreId));
    console.log('booksByGenre: ', booksByGenre);

    return (
        <div className=''>
            <ul className=''>
                {booksByGenre.map((book, i) =>
                    <BookPreview
                        item={book}
                        showAuthorName={false}
                        stars={[1, 2, 3]}
                        key={`book_${i}`}
                        genres={genres}
                        authors={authors}/>
                )}
            </ul>
        </div>
    )
}

export default withRouter(GenreDetail);




