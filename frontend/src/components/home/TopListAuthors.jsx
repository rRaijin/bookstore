import { useState, useEffect } from "react"
import { fetchPaginatedData } from "../../utils";
import Mosaic from "../Mosaic";

const ITEMS_PER_PAGE = 6

const TopListAuthors = () => {
    const [selectedPage, setSelectedPage] = useState(1);
    const [countItems, setCountItems] = useState(0);
    const [itemsPage, updateItemsPage] = useState([]);
    const [items, updateItems] = useState([]);
    const [isLoading, setIsLoading] = useState(true); 
    const [filter, updateFilter] = useState({
        desc: ''
    });

    useEffect(() => {
        fetchPaginatedData('authors', 'POST', {pageNum: selectedPage, perPage: ITEMS_PER_PAGE, countItems}, (data) => {
            if (data) {
                setIsLoading(false);
                const pageObj = {
                    page: 1,
                    items: data.items
                };
                setCountItems(data.countItems);
                updateItemsPage([pageObj]);
                console.log(data)
            } else {

            }
        });
    }, [])

    const updateFilters = (fieldName, value) => {
        filter[fieldName] = value;
        updateFilter({...filter});
    }

    const handleLoadMore = (pageNum) => {
            setSelectedPage(pageNum); // вот тут пропадает список
            setIsLoading(true);
            const existsNums = items.reduce((acc, b) => {
                acc.push(b.page);
                return acc;
            }, []);
            if (existsNums.indexOf(pageNum) === -1) {
                setTimeout(() => {
    
                    fetchPaginatedData('authors', 'POST', {
                        pageNum, 
                        perPage: ITEMS_PER_PAGE,
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
                },500);
            } else {
                console.log('DATA exists, query not need');
            }
        }

    return (
        <div>

            <input
                className=''
                value={filter.desc}
                onChange={e => updateFilters('desc', e.target.value)}/>
            <button onClick={() => handleLoadMore(1, true)}>
                OK
            </button>
            <Mosaic
                className="authors-page-list"
                isLoading={isLoading}
                selectedPage={selectedPage}
                itemsPage={itemsPage} 
                countItems={countItems}
                itemsPerPage={ITEMS_PER_PAGE}
                handleLoadMore={handleLoadMore}
                childrenFn={(author, i) => (
                    <div key={i} className="authors-page-card">
                        <h3>{author.userId?.firstName}</h3>
                        <h3>{author.userId?.lastName}</h3>
                        <p>{author.bio}</p>
                    </div>
                )}/>

        </div>
    )
}


export default TopListAuthors