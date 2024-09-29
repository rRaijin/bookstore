import { useState, useEffect } from 'react';


const Dropdown = (props) => {
    const { className, items, initialValue, onChangeHandler } = props;

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

    console.log('sel: ', selectedItem)

    return (
        <div className={className}
            onMouseEnter={() => setSelectStatus(true)}
            onMouseLeave={() => setSelectStatus(false)}
        >
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
                <div className=''>
                    {selectStatus && items && items.length > 0 &&(
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
                    )}
                </div>
            }
        </div>
    )
}

export default Dropdown;
