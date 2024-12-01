import { useState, useEffect, Fragment } from 'react';

import { fetchData, saveData } from '../utils';


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
            console.log('submit data: ', initialValues);
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

        if (childHTML && typeof childHTML === 'function') {
            console.log('childHTML PROPS: ', childHTML().props)
        }

        // const x = {a : 1};
        // if (x && x.a) {
        //     console.log('x a: ', x.a);
        // }
        // if (x && x.hasOwnProperty('a')) {
        //     console.log('x a: ', x.a);
        // }

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
                {childHTML && typeof childHTML === 'function' && childHTML()}
                {childHTML && typeof childHTML === 'function' && childHTML().props.children}
            </Fragment>
        )
    }
    return ComponentWithABShow;
}
