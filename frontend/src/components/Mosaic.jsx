import { useState, Fragment } from 'react';

import Loader from './Loader';
import Pagination from './Pagination';

const Mosaic = (props) => {
    const { className, isLoading, selectedPage, itemsPage, childrenFn, countItems, itemsPerPage, handleLoadMore } = props;
    console.log('render in mosaic: ', countItems)
    const renderWithLoad = () => {
        const stateSelected = isLoading ? selectedPage - 1 : selectedPage;
        const currentPageObj = itemsPage?.find(pageItem => pageItem.page === stateSelected);
        const renderItems = currentPageObj ? currentPageObj.items : itemsPage[0] ? itemsPage[0].items : [];

        console.log('arr1: ', renderItems)
        const orderedRenderItems = renderItems.sort((a, b) => (a.bookName > b.bookName) ? -1 : 1);
        // 1. В случае сортировки по числовому полю достаточно разницы -> a.price - b.price
        // 2. Для сравнения по текстовому полю более широкая запись -> (a.bookName > b.bookName) ? -1 : 1
        console.log('arr2: ', orderedRenderItems)

        return (
            orderedRenderItems.map((book, i) => childrenFn(book, i)),
            renderItems.map((author, i) => childrenFn(author, i))
        )
    }

    return (
        <Fragment>
            <div className={`${className} mosaic-wrapper`}>
                {renderWithLoad()}
                {isLoading && <Loader/>}  
            </div>
            {
                countItems > itemsPerPage &&
                <Pagination 
                    countItems={countItems}
                    itemsPerPage={itemsPerPage} 
                    selectedPage={selectedPage}
                    onLoadMore={handleLoadMore}/>
            }
        </Fragment>
    )
}

export default Mosaic;
