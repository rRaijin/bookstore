import { useState, useEffect } from 'react';

import { fetchData, saveData } from '../utils';
import newspapers from '../pages/admin/newspapers';


export const adminEditHOC = (Component, fetchedURLName, validationFn, entity = 'что-то') => {
    function ComponentWithABShow(props) {
        // console.log('props in hoc:   ', props);
        const [items, setItems] = useState([]);
        const [initialValues, setInitialValues] = useState(null);
        const [count, setCount] = useState(0)
        const [isDisabled, setIsDisabled] = useState(false);

        useEffect(() => {
            fetchData(fetchedURLName, (data) => {
                setItems(data);
            });
        }, []);

        const updateInitialValues = (field, val) => {
            setInitialValues((prevData) => ({
                ...prevData,
                [field]: val
            }));
        }
    
        const setSelectedItem = (item) => setInitialValues({...item})

        const onStartCreateHandle = () => setInitialValues(null);

        const dontclickDisplayText = (item) => {
            setCount(prevCount => {
                const newCount = prevCount + 1;

                if (newCount === 3) {
                    alert('Не нажимай часто');
                }

                if (!isDisabled) {
                    setSelectedItem(item);
                }

                if (newCount === 10) {
                    setIsDisabled(true);
                    alert('Остановитесь, функция больше не будет работать');
                }

                return newCount;
            });
        }
        
        const formSubmit = () => {
            if (validationFn(initialValues)) {
                saveData(fetchedURLName, initialValues, (response) => {
                    // Обработка успешного ответа
                    alert(`${entity}а успешно сохранён!`);
                }, (error) => {
                    console.error(`Ошибка при сохранении ${entity}ы:`, error);
                });
            } else {
                alert(`Не возможно создать ${entity}у`);
            }
        }

        const keyGenerate = (item, index) => `custom-key-${item.id || index}`;
        const displayText = (item) => item[`${fetchedURLName}Name`];

        return (

            
            <Component
                {...props}
                items={items}
                initialValues={initialValues}
                updateInitialValues={updateInitialValues}
                onStartCreateHandle={onStartCreateHandle}
                formSubmit={formSubmit}
                keyGenerate={keyGenerate}
                displayText={displayText}
                dontclickDisplayText={dontclickDisplayText}
                />
        )
    }
    return ComponentWithABShow;
}
