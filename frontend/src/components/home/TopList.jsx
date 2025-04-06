import { useState, useEffect } from 'react';

import { fetchPaginatedData } from '../../utils';
import BookDetail from '../../components/books/BookDetail';
import Loader from '../Loader';
import Mosaic from '../../components/Mosaic';
import Pagination from '../Pagination';


const ITEMS_PER_PAGE = 4;


const TopList = (props) => {
    const {  } = props;

    const [selectedPage, setSelectedPage] = useState(1);
    const [countItems, setCountItems] = useState(0);
    const [itemsPage, updateItemsPage] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [filter, updateFilter] = useState(null);

    useEffect(() => {
        fetchPaginatedData('books', 'POST', {pageNum: selectedPage, perPage: ITEMS_PER_PAGE, countItems}, (data) => {
            if (data) {
                setIsLoading(false);
                const pageObj = {
                    page: 1,
                    items: data.items
                };
                setCountItems(data.countItems);
                updateItemsPage([pageObj]);
            } else {
            }
        });
    }, []);

    const handleLoadMore = (pageNum, force = false) => {
        setSelectedPage(pageNum); // вот тут пропадает список
        setIsLoading(true);

        if (force) {
            updateItemsPage([]);
            const newCountValue = 0;
            setCountItems(newCountValue);
            fetchPaginatedData('books', 'POST', {
                pageNum, 
                perPage: ITEMS_PER_PAGE,
                countItems: newCountValue,
                filter
            }, (data) => {
                if (data) {
                    console.log('dt: ', data)
                    setTimeout(() => {
                        setIsLoading(false)
                        updateItemsPage([{page: pageNum, items: data.items}]);
                        setCountItems(data.countItems);
                    }, 500)
                } else {

                }
            });
        } else {
            const existsNums = itemsPage.reduce((acc, b) => {
                acc.push(b.page);
                return acc;
            }, []);
            if (existsNums.indexOf(pageNum) === -1) {
                setTimeout(() => {
                    fetchPaginatedData('books', 'POST', {
                        pageNum, 
                        perPage: ITEMS_PER_PAGE,
                        countItems,
                        filter
                    }, (data) => {
                        if (data) {
                            setTimeout(() => {
                                setIsLoading(false)
                                updateItemsPage([{page: pageNum, items: data.items}])
                            }, 500)
                        } else {
        
                        }
                    });
                });
            } else {
                console.log('DATA exists, query not need');
            }
        }
    }

    return (
        <div>
            <div>
                <div className=''>
                    <h2>
                        Самые популярные
                    </h2>

                    <input
                        className=''
                        value={filter}
                        onChange={e => updateFilter(e.target.value)}/>
                    <button onClick={() => handleLoadMore(1, true)}>
                        OK
                    </button>

                    <Mosaic
                        className='books-page-list'
                        isLoading={isLoading}
                        selectedPage={selectedPage}
                        itemsPage={itemsPage}
                        countItems={countItems}
                        itemsPerPage={ITEMS_PER_PAGE}
                        handleLoadMore={handleLoadMore}
                        childrenFn={(book, i) => <BookDetail key={`book-${i}`} item={book}/>}
                    />
                </div>
            </div>
        </div>
    )
}

export default TopList;
