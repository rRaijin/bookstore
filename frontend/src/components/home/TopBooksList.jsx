import { useState, useEffect } from 'react';

import { fetchPaginatedData } from '../../utils';
import { HOME_TOP_BOOK_LIST_ITEMS_PER_PAGE } from '../../constants';
import BookDetail from '../books/BookDetail';
import Mosaic from '../Mosaic';


const TopBooksList = (props) => {
    const {  } = props;

    const [selectedPage, setSelectedPage] = useState(1);
    const [countItems, setCountItems] = useState(0);
    const [itemsPage, updateItemsPage] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [filter, updateFilter] = useState({
        desc: '',
        price: null
    });

    useEffect(() => {
        fetchPaginatedData('books', 'POST', {pageNum: selectedPage, perPage: HOME_TOP_BOOK_LIST_ITEMS_PER_PAGE, countItems}, (data) => {
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

    const updateFilters = (fieldName, value) => {
        filter[fieldName] = value;
        updateFilter({...filter});
    }

    const handleLoadMore = (pageNum, force = false) => {
        setSelectedPage(pageNum); // вот тут пропадает список
        setIsLoading(true);

        if (force) {
            updateItemsPage([]);
            const newCountValue = 0;
            setCountItems(newCountValue);
            fetchPaginatedData('books', 'POST', {
                pageNum, 
                perPage: HOME_TOP_BOOK_LIST_ITEMS_PER_PAGE,
                countItems: newCountValue,
                filter
            }, (data) => {
                if (data) {
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
                        perPage: HOME_TOP_BOOK_LIST_ITEMS_PER_PAGE,
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

        // Validation example
        // if (filter.desc !== '') {
        // } else {
        //     console.log('Need filter');
        // }
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
                        value={filter.desc}
                        onChange={e => updateFilters('desc', e.target.value)}/>
                    <input
                        className=''
                        value={filter.price}
                        onChange={e =>  updateFilters('price', e.target.value)}/>
                    <button onClick={() => handleLoadMore(1, true)}>
                        OK
                    </button>

                    <Mosaic
                        className='books-page-list'
                        isLoading={isLoading}
                        selectedPage={selectedPage}
                        itemsPage={itemsPage}
                        countItems={countItems}
                        itemsPerPage={HOME_TOP_BOOK_LIST_ITEMS_PER_PAGE}
                        handleLoadMore={handleLoadMore}
                        childrenFn={(book, i) => <BookDetail key={`book-${i}`} item={book}/>}
                    />
                </div>
            </div>
        </div>
    )
}

export default TopBooksList;
