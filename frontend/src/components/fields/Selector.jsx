import { useState, useEffect } from 'react';


const Selector = (props) => {
    const { initialValue, className, fieldName, items, onSelectHandler } = props;
    const [selectedList, updateSelectedList] = useState([]);

    useEffect(() => {
        if (initialValue) {
            updateSelectedList(initialValue.reduce((acc, item) => {
                acc.push(item._id);
                return acc;
            }, []));
        }
    }, [initialValue]);

    const onCheckHandler = (val) => {
        const updatedList = selectedList.includes(val) ? 
            selectedList.filter(k => k !== val) :
            [...selectedList, val];
        updateSelectedList(updatedList);
        onSelectHandler(fieldName, updatedList);
    }

    return (
        <div className={className}>
            {
                items.map((item, index) => (
                    <div key={`${fieldName}-${index}`}>
                        <input
                            type='checkbox'
                            checked={selectedList.includes(item._id)}
                            onChange={() => onCheckHandler(item._id)}
                        />
                        <label className=''>{item.title}</label>
                    </div>
                ))
            }
        </div>
    )
}

export default Selector;
