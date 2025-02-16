const Pagination = ({ dataPerPage, totalData, paginate, selectedPage }) => {
    const pageNum = [];

    for (let i = 1; i <= Math.ceil(totalData / dataPerPage); i++) {
        pageNum.push(i);
    }

    return (
        <div className='pagination-pages'>
            <ul className='flex'>
                {pageNum.map((num) => (
                    <li className={selectedPage === num ? 'pagination-page-active' : ''} key={num}>
                        <a className='' href="#" onClick={() => paginate(num)}>
                            {num}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Pagination;
