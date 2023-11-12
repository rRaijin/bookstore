import { withRouter } from '../hocs/withRouter';
import authors from '../mock/authors.json';
import books from '../mock/books.json';
import genres from '../mock/genres.json';
import BookPreview from '../components/books/BookPreview';


const AuthorDetail = (props) => {
    console.log('render: ', props);
    const author = authors.find(k => Number(k.id) === Number(props.router.params.id));
    console.log('author: ', author);
    const booksByAuthor = books.filter(k => Number(k.author) === Number(author.id));
    console.log('booksByAuthor: ', booksByAuthor);

    return (
        <div className=''>
            <p className=''>
                {author.firstName} {author.lastName}
            </p>
            <ul>
                {booksByAuthor.map((book, i) =>
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

export default withRouter(AuthorDetail);
