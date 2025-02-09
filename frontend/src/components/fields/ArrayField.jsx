import { useState, useEffect } from 'react';
import Dialog from '../dialogs/Dialog';


const ArrayField = (props) => {
    const { initialValue, listItems, mapper, fieldName, onChangeHandler } = props;

    const [items, setItems] = useState([]);
    const [showDialogStatus, setShowStatus] = useState(false);

    useEffect(() => {
        setItems(listItems.filter(k => initialValue.indexOf(k.id) !== -1));
    }, [initialValue]);
    
    const itemsChoosed = (listIds) => {
        setShowStatus(false);
        onChangeHandler(fieldName, listIds);
    }

    return (
        <div className='w-full'>
            <Dialog
                items={listItems}
                initialItems={items}
                showStatus={showDialogStatus}
                itemsChoosed={itemsChoosed}
            />
            {
                items.map((item, i) => {
                    console.log(item)
                    return (
                        <div className='' key={`list-item-${i}`}>
                            {mapper(item)}
                        </div>
                    )
                })
            }
            <div>
                <span>
                    Edit publisher`s list: 
                </span>
                <button type='button' className='choose-publisher-button' onClick={() => setShowStatus(true)}>
                    +
                </button>
            </div>
            
            
        </div>
    )
}

export default ArrayField;
