import { useState, useEffect } from 'react';


const Dropdown = (props) => {
    const { className, items, initialValue, onChangeHandler } = props;

    const [selectedItem, setSelectedItem] = useState();
    const [selectStatus, setSelectStatus] = useState(false);

    const onSelectHandle = (id) => {
        console.log('select: ', id)
        if (items) {
            const selected = items.find(el => el.id === id);
            setSelectedItem(selected);
            onChangeHandler(id);
        }
        setSelectStatus(false);
    }

    // useEffect(() => {
    //     if (initialId) {
    //         if (items) {
    //             setSelectedItem(items.find(item => item.id === initialId));
    //         } else {

    //         }
    //     }
    // }, [initialId]);

    // console.log('items: ', items);

    // изначально показываем 1го автора, при наведении курсора мыши - открываем весь список(можно без скрола, но лучше с ним),
    // клик по автору - меняем стейт и закрываем список, желательно css красиво

    return (
        <div className={className}
            // onMouseEnter={() => setSelectStatus(true)}
            // onMouseLeave={() => setSelectStatus(false)}
        >
            <div className=''>
                <div className='selected-name'>
                    {
                        selectedItem && 
                        selectedItem.firstName + ' ' + selectedItem.lastName
                    }
                </div>
                
            </div>
            {
                <div className=''>
                    {
                        items.map((item, i) => {
                            return (
                                <div
                                    className='select-item'
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
