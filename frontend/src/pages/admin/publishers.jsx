import { useState, useEffect } from 'react';

import { fetchData, saveData } from '../../utils';
import Input from '../../components/fields/Input';
import TextareaField from '../../components/fields/TextareaField';
import { adminEditHOC } from '../../hocs/adminEditHOC';


const AdminPublisher = (props) => {
    const { items, initialValues, updateInitialValues, setSelectedItem, onStartCreateHandle, formSubmit } = props;

    return (
        <div className='flex'>
            <div className='admin-list-wrapper'>
                <div>
                    <ul className='admin-list'>
                        {
                            items.map((publisher, i) => {
                                return (
                                    <li
                                        className='pointer flex'
                                        key={`publisher-${i}`}
                                        onClick={() => setSelectedItem(publisher)}>

                                        <div>
                                            <strong>
                                                {publisher.publisherName} 
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
                        fieldName='publisherName'
                        initialValue={initialValues ? initialValues.publisherName : ''}
                        onChangeHandler={updateInitialValues}/>
                    <TextareaField
                        className='text-input admin-bio'
                        fieldName='description'
                        initialValue={initialValues ? initialValues.description : ''}
                        onChangeHandler={updateInitialValues}
                        rows={8}/>
                    <Input
                        className='text-input admin-author-name'
                        fieldName='editorInChief'
                        initialValue={initialValues ? initialValues.editorInChief : ''}
                        onChangeHandler={updateInitialValues}/>
                    <Input
                        className='text-input year-book'
                        fieldName='year'
                        inputType='number'
                        maxValue={10000}
                        initialValue={initialValues ? initialValues.year : ''}
                        onChangeHandler={updateInitialValues}/>
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
    AdminPublisher,
    'publisher',
    (initialValues) =>
        initialValues.publisherName &&
        initialValues.description &&
        initialValues.year &&
        initialValues.editorInChief
);
