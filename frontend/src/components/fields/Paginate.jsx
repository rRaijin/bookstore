import { useState, useEffect } from "react"

import { fetchData } from "../../utils";
import FilteredBooksList from "../books/FilteredBooksList";
import Pagination from "./Pagination";


const ITEMS_PER_PAGE = 2;

const Paginate = ({fieldName}) => {
    const [selectedPage, setSelectedPage] = useState(1);
    const [books, updateData] = useState([]);
    

    useEffect(() => {
            fetchData('books', 'POST', {pageNum: selectedPage, perPage: ITEMS_PER_PAGE}, updateData);
        }, [selectedPage]);

        const handleLoadMore = () => {
            const nextPageNum = selectedPage + 1;
            fetchData('books', 'POST', {pageNum: nextPageNum, perPage: ITEMS_PER_PAGE}, updateData);
            setSelectedPage(nextPageNum);
        }
        
        const handleLoadLess = () => {
            const prevPageNum = selectedPage - 1;
            fetchData('books', 'POST', {pageNum: prevPageNum, perPage: ITEMS_PER_PAGE}, updateData);
            setSelectedPage(prevPageNum);
        }

        const countItems = 8;

        const paginate = pageNum => setSelectedPage(pageNum)


    return (
        <div>
            <div>
                <div className=''>
                    <h2>
                        {fieldName}
                    </h2>
                    <FilteredBooksList
                        books={books}/>

                    <Pagination 
                        dataPerPage={ITEMS_PER_PAGE} 
                        totalData={countItems}
                        paginate={paginate}
                        selectedPage={selectedPage}/>
                    <div className="mt-5">
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
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Paginate