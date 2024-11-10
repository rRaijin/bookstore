import { useState, useEffect } from 'react';

import { fetchData, saveData } from '../utils';


export const adminEditHOC = (Component, fetchedURLName, validationFn, entity = 'что-то') => {
    function ComponentWithABShow(props) {
        // console.log('props in hoc:   ', props);
        const [items, setItems] = useState([]);
        const [initialValues, setInitialValues] = useState(null);

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
    
        const setSelectedItem = (item) => setInitialValues({...item});

        const onStartCreateHandle = () => setInitialValues(null);
        
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

        return (
            <Component
                {...props}
                items={items}
                initialValues={initialValues}
                updateInitialValues={updateInitialValues}
                setSelectedItem={setSelectedItem}
                onStartCreateHandle={onStartCreateHandle}
                formSubmit={formSubmit}
                />
        )
    }
    return ComponentWithABShow;
}
