import { useState, useEffect } from 'react';

const ArrayField = (props) => {
    console.log(' arr props: ', props);
    const { initialValues, listItems, mapper } = props;

    const [items, setItems] = useState([]);

    useEffect(() => {
        console.log('use effect')
        setItems(listItems);
    }, [listItems]);

    const addNewItem = () => {
        setItems([...items, {
            
        }]);
    }

    console.log('render items: ', items)

    return (
        <div>
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
            <button type='button' className='' onClick={addNewItem}>
                +
            </button>
            
        </div>
    )
}

export default ArrayField;
