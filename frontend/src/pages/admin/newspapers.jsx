import { useState, useEffect } from 'react';

import { fetchData, saveData } from '../../utils';
import Input from '../../components/fields/Input';
import TextareaField from '../../components/fields/TextareaField';
import { adminEditHOC } from '../../hocs/adminEditHOC';


const AdminNewspapper = (props) => {
    const { items, initialValues, updateInitialValues, setSelectedItem, onStartCreateHandle, formSubmit } = props;

    // const formSubmit = () => {
    //     if (
    //         initialValues.newspaperName &&
    //         initialValues.description &&
    //         initialValues.year &&
    //         initialValues.publisher
    //     ) {
    //         saveData('newspaper', initialValues, (response) => {
    //             // Обработка успешного ответа
    //             alert('Газета успешно сохранён!');
    //         }, (error) => {
    //             console.error('Ошибка при сохранении газеты:', error);
    //         });
    //     } else {
    //         alert('Не возможно создать газету');
    //     }
    // }

    return (
        <div className='flex'>
            <div className='admin-list-wrapper'>
                <div>
                    <ul className='admin-list'>
                        {
                            items.map((newspaper, i) => {
                                return (
                                    <li
                                        className='pointer flex'
                                        key={`newspaper-${i}`}
                                        onClick={() => setSelectedItem(newspaper)}>

                                        <div>
                                            <strong>
                                                {newspaper.newspaperName} 
                                            </strong>
                                        </div>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
            </div>
            <div className='admin-form-wrapper'>
                <div>
                    <button className='create-buttom' onClick={onStartCreateHandle}>
                        CREATE
                    </button>
                </div>
                <form className='admin-books-form'>
                    <Input
                        className='text-input admin-author-name'
                        fieldName='newspaperName'
                        initialValue={initialValues ? initialValues.newspaperName : ''}
                        onChangeHandler={updateInitialValues}/>
                    <Input
                        className='text-input admin-author-lastname'
                        fieldName='description'
                        initialValue={initialValues ? initialValues.description : ''}
                        onChangeHandler={updateInitialValues}/>
                    <Input
                        className='text-input year-book'
                        fieldName='year'
                        inputType='number'
                        maxValue={10000}
                        initialValue={initialValues ? initialValues.year : ''}
                        onChangeHandler={updateInitialValues}/>
                    <TextareaField
                        className='text-input admin-bio'
                        fieldName='publisher'
                        initialValue={initialValues ? initialValues.publisher : ''}
                        onChangeHandler={updateInitialValues}
                        rows={8}/>
                    <button
                        type='button'
                        className='save-button'
                        onClick={formSubmit}>
                        SAVE
                    </button>
                </form>
            </div>
        </div>
    )
}

export default adminEditHOC(
    AdminNewspapper,
    'newspaper',
    (initialValues) =>
        initialValues.newspaperName &&
        initialValues.description &&
        initialValues.year &&
        initialValues.publisher,
    'газет'
);
