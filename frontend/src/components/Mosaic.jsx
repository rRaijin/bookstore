import { useState, Fragment } from 'react';

import Loader from './Loader';
import Pagination from './Pagination';

const Mosaic = (props) => {
    const { className, isLoading, selectedPage, itemsPage, childrenFn, countItems, itemsPerPage, handleLoadMore } = props;

    const renderWithLoad = () => {
        const stateSelected = isLoading ? selectedPage - 1 : selectedPage;
        const currentPageObj = itemsPage.find(pageItem => pageItem.page === stateSelected);
        const renderItems = currentPageObj ? currentPageObj.items : [];

        return (
            renderItems.map((book, i) => childrenFn(book, i))
        )
    }

    return (
        <Fragment>
            <div className={className + ' '}>
                {renderWithLoad()}
                {isLoading && <Loader/>}  
            </div>
    
            <Pagination 
                countItems={countItems}
                itemsPerPage={itemsPerPage} 
                selectedPage={selectedPage}
                onLoadMore={handleLoadMore}/>
        </Fragment>
    )
}

export default Mosaic;
