import { useState, useEffect, Fragment } from 'react';

import { fetchData, saveData } from '../utils';
import newspapers from '../pages/admin/newspapers';


export const adminEditHOC = (Component, fetchedURLName, validationFn, entity = 'что-то', childHTML) => {
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

        const keyGenerate = (item, index) => `custom-key-${item.id || index}`;
        const displayText = (item) => item[`${fetchedURLName}Name`];

        console.log('asfds', childHTML().props)

        return (
            <Fragment>
                <Component
                    {...props}
                    items={items}
                    initialValues={initialValues}
                    setSelectedItem={setSelectedItem}
                    updateInitialValues={updateInitialValues}
                    onStartCreateHandle={onStartCreateHandle}
                    formSubmit={formSubmit}
                    keyGenerate={keyGenerate}
                    displayText={displayText}/>
                {childHTML()}
                {childHTML().props.children}
            </Fragment>
        )
    }
    return ComponentWithABShow;
}
