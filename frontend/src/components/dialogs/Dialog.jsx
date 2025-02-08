import { useEffect, useState, Fragment } from 'react';


const Dialog = (props) => {
    const { items, showStatus, itemsChoosed, initialItems } = props;
    const [checkedList, updateCheckList] = useState([]);

    useEffect(() => {
        const initIds = initialItems.reduce((acc, el) => {
            acc.push(el.id);
            return acc;
        }, []);
        updateCheckList(initIds);
    }, [initialItems]);

    const closeHandler = () => {
        itemsChoosed(checkedList);
        updateCheckList([]);
    }

    const onCheckHandler = (id) => {
        if (checkedList.indexOf(id) === -1) {
            updateCheckList([...checkedList, id]);
        } else {
            updateCheckList(checkedList.filter(k => k !== id));
        }
    }

    return (
        <Fragment>
            {
                showStatus &&
                <div className='modal'>
                    <div className='modal-content'>  
                        {
                            items.map((item, i) => {
                                return (
                                    <div className=''>
                                        <p className=''>
                                            <span className=''>{item.firstName}</span>
                                            <span className=''>{item.lastName}</span>
                                            <input
                                                type='checkbox'
                                                checked={checkedList.indexOf(item.id) !== -1}
                                                onChange={() => onCheckHandler(item.id)}
                                            />
                                        </p>
                                    </div>
                                )
                            })
                        }
                        <button className='close-dialog-button' type='button' onClick={closeHandler}>
                            close
                        </button>
                    </div>
                </div>
            }
        </Fragment>
    )
}

export default Dialog;