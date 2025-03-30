import { useState, useEffect } from 'react';

import { fetchPaginatedData } from '../../utils';
import BookDetail from '../../components/books/BookDetail';
import Pagination from '../Pagination';
import Loader from '../Loader';


const ITEMS_PER_PAGE = 2;


const TopList = (props) => {
    const {  } = props;

    const [selectedPage, setSelectedPage] = useState(1);
    const [countItems, setCountItems] = useState(0);
    const [books, updateBooks] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [newBooks, setNewBooks] = useState([])

    useEffect(() => {
        fetchPaginatedData('books', 'POST', {pageNum: selectedPage, perPage: ITEMS_PER_PAGE, countItems}, (data) => {
            if (data) {
                setIsLoading(false);
                const pageObj = {
                    page: 1,
                    items: data.items
                };
                setCountItems(data.countItems);
                updateBooks([pageObj]);
            } else {

            }
        });
    }, []);

    const handleLoadMore = (pageNum) => {
        setSelectedPage(pageNum); // вот тут пропадает список
        setIsLoading(true);
        const existsNums = books.reduce((acc, b) => {
            acc.push(b.page);
            return acc;
        }, []);
        if (existsNums.indexOf(pageNum) === -1) {
            setTimeout(() => {

                fetchPaginatedData('books', 'POST', {
                    pageNum, 
                    perPage: ITEMS_PER_PAGE,
                    countItems
                }, (data) => {
                    if (data) {
                        setTimeout(() => {
                            setIsLoading(false)
                            updateBooks([{page: pageNum, items: data.items}])
                        }, 500)
                    } else {
    
                    }
                });
            });
        } else {
            console.log('DATA exists, query not need');
        }
    }

    return (
        <div>
            <div>
                <div className=''>
                    <h2>
                        asdasdasd
                    </h2>
                    
                    <div className='books-page-list'>
                        {books.flatMap(b => b.items).map((book, i) => (
                            <BookDetail key={`book-${i}`} item={book}/>
                        ))}
                        {isLoading && <Loader/>}
                            
                    </div>

                    <Pagination 
                        countItems={countItems}
                        itemsPerPage={ITEMS_PER_PAGE} 
                        selectedPage={selectedPage}
                        onLoadMore={handleLoadMore}/>
                </div>
            </div>
        </div>
    )
}

export default TopList;
