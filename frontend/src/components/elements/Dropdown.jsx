import { useState, useEffect } from 'react';


// 1. чтобі не растягивало форму + скролилось.


const Dropdown = (props) => {
    const { className, items, initialValue, onChangeHandler, fieldName } = props;

    const [selectedItem, setSelectedItem] = useState(null);
    const [selectStatus, setSelectStatus] = useState(false);

    useEffect(() => {
        // if (initialValue && initialValue?.authorId?._id) {
        // if (initialValue && initialValue.hasOwnProperty('authorId') && initialValue.authorId.hasOwnProperty('_id')) {
        if (initialValue) {
            const initAuthor = items.find(k => k.id === initialValue.authorId._id);
            setSelectedItem(initAuthor);
        } else {
            console.log('initialValue: ', initialValue)
            setSelectedItem(null);
        }
    }, [initialValue]);

    const onSelectHandle = (id) => {
        console.log('select: ', id)
        if (items) {
            const selected = items.find(el => el.id === id);
            setSelectedItem(selected);
            onChangeHandler(id);
        }
        setSelectStatus(false);
    }

    return (
        
        <div className={`dropdown-container ${className}`} onMouseEnter={() => setSelectStatus(true)} onMouseLeave={() => setSelectStatus(false)}>
            <div>
                {fieldName}
            </div>
            <div className='flex select-author-default'>
                <div className=''>
                    {
                        selectedItem && 
                        `${selectedItem.firstName} ${selectedItem.lastName}`
                    }
                </div>
                <div>
                    <div className={`arrow ${selectStatus ? 'open' : ''}`}>
                        ▼
                    </div>
                </div>
            </div>
            {
                selectStatus && items && items.length > 0 && 
                <div className='authors-select'>
                    {
                        items.map((item, i) => {
                            return (
                                <div
                                    className='author-select'
                                    key={`${item.id}`}
                                    onClick={() => onSelectHandle(item.id)}>
                                    {item.firstName + ' ' + item.lastName}
                                </div>
                            )
                        })
                    }
                </div>
            }
        </div>
    )
}

export default Dropdown;
