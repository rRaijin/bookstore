import { useState, useEffect } from 'react';

import { fetchPaginatedData } from '../../utils';
import BookDetail from '../../components/books/BookDetail';
import Loader from '../Loader';
import Mosaic from '../../components/Mosaic';
import Pagination from '../Pagination';


const ITEMS_PER_PAGE = 2;


const TopList = (props) => {
    const {  } = props;

    const [selectedPage, setSelectedPage] = useState(1);
    const [countItems, setCountItems] = useState(0);
    const [itemsPage, updateItemsPage] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

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

    const handleLoadMore = (pageNum) => {
        setSelectedPage(pageNum); // вот тут пропадает список
        setIsLoading(true);
        const existsNums = itemsPage.reduce((acc, b) => {
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

    // const renderWithLoad = () => {
    //     const stateSelected = isLoading ? selectedPage - 1 : selectedPage;
    //     const currentPageObj = itemsPage.find(pageItem => pageItem.page === stateSelected);
    //     const renderItems = currentPageObj ? currentPageObj.items : [];

    //     return (
    //         renderItems.map((book, i) => {
    //                 return <BookDetail key={`book-${i}`} item={book}/>
    //             }
    //         )
    //     )
    // }

    return (
        <div>
            <div>
                <div className=''>
                    <h2>
                        asdasdasd
                    </h2>

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
                    
                    {/* <div className='books-page-list'>
                        {renderWithLoad()}
                        {isLoading && <Loader/>}  
                    </div>

                    <Pagination 
                        countItems={countItems}
                        itemsPerPage={ITEMS_PER_PAGE} 
                        selectedPage={selectedPage}
                        onLoadMore={handleLoadMore}/> */}
                </div>
            </div>
        </div>
    )
}

export default TopList;
