import { useState, useEffect } from 'react';

import { fetchData, saveData } from '../../utils';
import Input from '../../components/fields/Input';
import TextareaField from '../../components/fields/TextareaField';
import { adminEditHOC } from '../../hocs/adminEditHOC';


const AdminPublisher = (props) => {
    const { items, initialValues, updateInitialValues, setSelectedItem, onStartCreateHandle, formSubmit, displayText,
        keyGenerate,
        dontclickDisplayText } = props;

    return (
        <div className='flex admin-cards'>
            <div className='admin-list-wrapper'>
                <div>
                    <ul className='admin-list'>
                        {
                            items.map((publisher, i) => {
                                return (
                                    <li
                                        className='pointer flex'
                                        key={keyGenerate ? keyGenerate(publisher, i) : `publisher-${i}`}
                                        onClick={() => dontclickDisplayText(publisher)}
                                    >
                                        <div>
                                            <strong>
                                                {displayText ? displayText(publisher) : ''}
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
                    <TextareaField
                        className='textarea-input admin-bio'
                        fieldName='description'
                        initialValue={initialValues ? initialValues.description : ''}
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
            <div  className='empty-block'>

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
