
import { withRouter } from '../../hocs/withRouter';
import BookPreviewNew from './BookPreviewNew';

const FilteredBooksList = (props) => {
    const { books, router } = props;
    console.log('BOOKS: ', books, router);
    const itemId = Number(router.params.id);

    return (
        <div className='books-page-list'>
            {
                books.map((book) => {
                    return (
                        <BookPreviewNew
                            showAuthorName={true}
                            item={book}/>
                    )
                })
            }
        </div>
    )
}

export default withRouter(FilteredBooksList);
