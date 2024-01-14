import { withRouter } from '../../hocs/withRouter';
import BookPreviewNew from './BookPreviewNew';

const FilteredBooksList = (props) => {
    const { books, router, condition } = props; // РАСПЕЧАТЫВАЮ ПРОПСЫ
    const itemId = Number(router.params.id);
    // console.log('Как получить сегодняшнюю полную дату, учитівая секунді: ', new Date());
    // console.log('Как получить числовой формат сегодняшней даты, учитівая секунді: ', Date.now());
    // console.log('Как получить день сегодняшней даты: ', new Date().getDate());
    const mappedList = condition ? books.filter(book => condition(book)) : books;

    return (
        <div className='books-page-list'>
            {
                mappedList.map((book, i) => {
                    // console.log('День добавления книги в магазин: ', new Date(book.createdAt).getDate());
                    return (
                        <BookPreviewNew
                            key={`book-${i}`}
                            showAuthorName={true}
                            item={book}/>
                    )
                })
            }
        </div>
    )
}

export default withRouter(FilteredBooksList);
