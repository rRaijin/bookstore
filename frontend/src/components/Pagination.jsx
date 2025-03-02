const Pagination = ({ itemsPerPage, countItems, onLoadMore, selectedPage }) => {
    const pageNum = [];

    for (let i = 1; i <= Math.ceil(countItems / itemsPerPage); i++) {
        pageNum.push(i);
    }

    return (
        <div className='pagination-pages'>
            <ul className='flex'>
                {pageNum.map((num) => (
                    <li className={selectedPage === num ? 'pagination-page-active' : ''} key={num}>
                        <span className='' onClick={() => onLoadMore(num)}>
                            {num}
                        </span>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Pagination;
