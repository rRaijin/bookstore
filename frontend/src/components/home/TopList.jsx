import { useState, useEffect } from 'react';

import { fetchPaginatedData } from '../../utils';
import BookDetail from '../../components/books/BookDetail';
import Pagination from '../Pagination';


const ITEMS_PER_PAGE = 2;


const TopList = (props) => {
    const {  } = props;

    const [selectedPage, setSelectedPage] = useState(1);
    const [countItems, setCountItems] = useState(0);
    const [books, updateBooks] = useState([]);

    useEffect(() => {
        fetchPaginatedData('books', 'POST', {pageNum: selectedPage, perPage: ITEMS_PER_PAGE, countItems}, (data) => {
            console.log('data11: ', data)
            const pageObj = {
                page: 1,
                items: data.items
            };
            setCountItems(data.countItems);
            updateBooks([pageObj]);
        });
    }, []);
    

    // useEffect(() => {
    //     fetchData('books', 'POST', {pageNum: selectedPage, perPage: ITEMS_PER_PAGE}, updateBooks);
    // }, [selectedPage]);

    const handleLoadMore = (pageNum) => {
        console.log('pageN: ', pageNum);
        setSelectedPage(pageNum);
        const existsNums = books.reduce((acc, b) => {
            acc.push(b.page);
            return acc;
        }, []);
        if (existsNums.indexOf(pageNum) === -1) {
            fetchPaginatedData('books', 'POST', {
                pageNum, 
                perPage: ITEMS_PER_PAGE,
                countItems
            }, (data) => {
                const pageObj = {
                    page: pageNum,
                    items: data.items
                };
                updateBooks([...books, pageObj]);
            });
        } else {
            console.log('DATA exists, query not need')
        }

    }
    
    // const handleLoadLess = () => {
    //     const prevPageNum = selectedPage - 1;
    //     fetchData('books', 'POST', {pageNum: prevPageNum, perPage: ITEMS_PER_PAGE}, updateBooks);
    //     setSelectedPage(prevPageNum);
    // }

    // const paginate = pageNum => setSelectedPage(pageNum)

    console.log('bbb:', books);
    // продолжить паджинатор, костыль на отрисовке и проблема при нажатии на кнопку

    return (
        <div>
            <div>
                <div className=''>
                    <h2>
                        asdasdasd
                    </h2>
                    <div className='books-page-list'>
                        {
                            books.length > 0 ?
                            books.find(b => b.page === selectedPage)?.items.map((book, i) =>
                                <BookDetail
                                    key={`book-${i}`}
                                    showAuthorName={true}
                                    item={book}/>
                            ) :
                            <p>No data</p>
                        }
                    </div>

                    <Pagination 
                        countItems={countItems}
                        itemsPerPage={ITEMS_PER_PAGE} 
                        selectedPage={selectedPage}
                        onLoadMore={handleLoadMore}
                    />


                    {/* <div className="mt-5">
                        {
                            selectedPage > 1 &&
                            <button className="butt-prev" type='button' onClick={handleLoadLess}>
                                PREV
                            </button>
                        }
                        {
                            selectedPage * ITEMS_PER_PAGE < countItems &&
                            <button className='butt-next' type='button' onClick={handleLoadMore}>
                                NEXT
                            </button>
                        }
                    </div> */}
                </div>
            </div>
        </div>
    )
}

export default TopList;
