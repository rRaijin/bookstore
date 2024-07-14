import { useState, useEffect } from 'react';


const Select = (props) => {
    const { items, initialId, propToView, upToParent } = props;

    const [selectedItem, setSelectedItem] = useState();
    const [selectStatus, setSelectStatus] = useState(false);
    const [hoverCnt, setHoverCnt] = useState(0);

    const onSelectHandle = (id) => {
        if (items) {
            const selected = items.find(el => el.id === id); // {id: 1, name: 'bread'}
            setSelectedItem(selected);
            upToParent(selected);
        }
        setSelectStatus(false);
    }

    useEffect(() => {
        if (initialId) {
            if (items) {
                setSelectedItem(items.find(item => item.id === initialId));
            } else {

            }
        }
    }, [initialId]);
    console.log('hover cnt: ', hoverCnt);

    return (
        <div className='select-container'
            onMouseEnter={() => setSelectStatus(true)}
            onMouseLeave={() => setSelectStatus(false)}
        >
            <div className='selected-item'>
                <div className='selected-name'>
                    {selectedItem && selectedItem[propToView]}
                </div>
                <div className='selected-symbol'>
                    {selectStatus ? '-' : '+'}
                </div>
            </div>
            {
                selectStatus && items &&
                <div className='select-list'>
                    {
                        items.filter(el => selectedItem && el.id !== selectedItem.id).map((item, i) => {
                            return (
                                <div
                                    className='select-item'
                                    key={`${item.id}`}
                                    onMouseEnter={() => setHoverCnt(hoverCnt + 1)}
                                    onClick={() => onSelectHandle(item.id)}>
                                    {item[propToView]}
                                </div>
                            )
                        })
                    }
                </div>
            }
        </div>
    )
}

export default Select;
