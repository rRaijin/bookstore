import { withRouter } from '../frontend/src/hocs/withRouter';
import authors from '../frontend/src/mock/authors.json';
import books from '../frontend/src/mock/books.json';
import genres from '../frontend/src/mock/genres.json';
import BookPreview from '../frontend/src/components/books/BookPreview';

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




