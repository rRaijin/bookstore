import { useEffect, useState } from 'react';


const Pagination = ({ itemsPerPage, countItems, onLoadMore, selectedPage, showedNumbers = 5 }) => {
    const [pageNumbers, setPageNumbers] = useState([]);

    useEffect(() => {
        if (countItems && countItems > 0) {
            const pagesCnt = countItems / itemsPerPage;
            const start = Math.max(1, selectedPage - 2);
            const end = Math.min(pagesCnt, start + showedNumbers - 1);
            const result = Array.from({length: end - start + 1}, (x, i) => start + i);
            setPageNumbers(result);
        }
        
    }, [countItems]);

    const onClickLoadMore = (pageNum, specParam = null) => {
        const pagesCnt = countItems / itemsPerPage;

        if (pagesCnt >= 5) {
            const start = Math.max(1, pageNum - 2);
            const end = Math.min(pagesCnt, start + showedNumbers - 1);
            const numbersList = Array.from({length: end - start + 1}, (x, i) => start + i);
            setPageNumbers(numbersList);
        }

        if (!specParam) {
            onLoadMore(pageNum)
        } else if (specParam === 'less') {
            if (pageNum >= 1) {
                onLoadMore(pageNum);
            }
        } else {
            if (pageNum <= (countItems / itemsPerPage)) {
                onLoadMore(pageNum);
            }
        }
    }

    return (
        <div className='pagination-pages'>
            <ul className='flex'>
                <li className='' onClick={() => onClickLoadMore(selectedPage - 1, 'less')}>
                    PREV
                </li>
                {pageNumbers.map((pageNum) => (
                    <li onClick={() => onClickLoadMore(pageNum)} className={selectedPage === pageNum ? 'pagination-page-active' : ''} key={`page-${pageNum}`}>
                        <span className=''>
                            {pageNum}
                        </span>
                    </li>
                ))}
                <li className='' onClick={() => onClickLoadMore(selectedPage + 1, 'more')}>
                    NEXT
                </li>
            </ul>
        </div>
    );
};

export default Pagination;
