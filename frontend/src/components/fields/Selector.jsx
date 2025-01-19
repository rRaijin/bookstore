import { useState, useEffect } from 'react';


const Selector = (props) => {
    const { initialValue, className, fieldName, items, onSelectHandler, isMultiple = true  } = props;
    const [selectedList, updateSelectedList] = useState([]);

    useEffect(() => {
        if (initialValue) {
            if (isMultiple) {
                updateSelectedList(initialValue.reduce((acc, item) => {
                    acc.push(item._id);
                    return acc;
                }, []));
            } else {
                updateSelectedList(initialValue ? [initialValue._id] : []);
            }
        } else {
            updateSelectedList(isMultiple ? [] : []);
        }
    }, [initialValue, isMultiple]);

    const onCheckHandler = (val) => {
        if (isMultiple) {
            const updatedList = selectedList.includes(val) ? 
                selectedList.filter(k => k !== val) :
                [...selectedList, val];
            updateSelectedList(updatedList);
            onSelectHandler(fieldName, updatedList); 
        } else {
            updateSelectedList([val]);
            onSelectHandler(fieldName, val); 
        }
    }

    return (
        <div className={className}>
            <div className='flex flex-wrap'>
                {
                    items.map((item, index) => (
                        <div key={`${fieldName}-${index}`} className='select-item-1'>
                            {isMultiple ? (
                                <input
                                    type='checkbox'
                                    checked={selectedList.includes(item._id)}
                                    onChange={() => onCheckHandler(item._id)}
                                />
                            ) : (
                                <input
                                    type='radio'
                                    name={fieldName} 
                                    checked={selectedList[0] === item._id}
                                    onChange={() => onCheckHandler(item._id)}
                                />
                            )}
                            <label>{item.title}</label>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default Selector;
