import { useEffect, useState } from 'react';


const Pagination = ({ itemsPerPage, countItems, onLoadMore, selectedPage, showedNumbers = 5 }) => {
    const [pageNumbers, setPageNumbers] = useState([]);

    useEffect(() => {
        if (countItems && countItems > 0) {
            const result = [];
            const pagesCnt = countItems / itemsPerPage;
            const parsedNumber = pagesCnt >= 5 ? showedNumbers : pagesCnt; 
            console.log('cnt: ', countItems, parsedNumber)
            for (let i = 1; i <= Math.ceil(parsedNumber); i++) {
                result.push(i);
            }
            setPageNumbers(result);
        }
    }, [countItems]);

    // def - 12345
    // 3 - 12 3 45
    // 5 - 34 5 67
    // 6 - 45 6 78

    const onClickLoadMore = (pageNum, specParam = null) => {
        // [1,2,3,4,5]
        // case 1: choosed 2 - [1,2,3,4,5]
        // case 2: choosed 4 - [2,3,4,5,6]
        // case 3: choosed 7 - [5,6,7,8,9]
        const pagesCnt = countItems / itemsPerPage;

        if (pagesCnt >= 5) {
            //  [1,2,3,4,5] - 4
            const indexOfNum = pageNumbers.indexOf(pageNum);
            


            const sx = [pageNumbers[indexOfNum - 2], pageNumbers[indexOfNum - 1], pageNum, pageNumbers[indexOfNum + 1], pageNumbers[indexOfNum + 2]];
            console.log('sx: ', sx)
            setPageNumbers(sx);
            console.log('asd: ', indexOfNum)
        }

        if (!specParam) {
            onLoadMore(pageNum)
        } else if (specParam === 'less') {
            if (pageNum >= 1) {
                onLoadMore(pageNum)
            }
        } else {
            if (pageNum <= (countItems / itemsPerPage)) {
                onLoadMore(pageNum)
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
                    <li className={selectedPage === pageNum ? 'pagination-page-active' : ''} key={`page-${pageNum}`}>
                        <span className='' onClick={() => onClickLoadMore(pageNum)}>
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
