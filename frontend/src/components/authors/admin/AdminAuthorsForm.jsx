import { useState, useEffect } from 'react';

import { saveData } from '../../../utils';

import Input from '../../fields/Input';
import TextareaField from '../../fields/TextareaField';


const AdminAuthorsForm = (props) => {
    const { selectedBook, onStartCreate, authors, selectedAuthor,setSelectedAuthor } = props;
    const [preparedData, setPreparedData] = useState({});

    useEffect(() => {
        if (selectedBook) {
            setPreparedData({...selectedBook});
        } else {
            setPreparedData({});
        }
    }, [selectedBook]);

    const changeAuthorHandler = (field, val) => {
        setPreparedData((prevData) => ({
            ...prevData,
            [field]: val,
            authorId: selectedAuthor ? selectedAuthor.id : null
        }));
    }

    const resetForm = () => {
        setSelectedAuthor(null);
        onStartCreate();
    }

    const formSubmit = () => {
        const dataToSubmit = {
            ...preparedData,
            imageFolder: 'authors'
        };
        console.log('submit data: ', dataToSubmit);
        if (
            dataToSubmit.authorId && 
            dataToSubmit.bio &&
            dataToSubmit.firstName &&
            dataToSubmit.lastName
        ) {
            saveData('authors', dataToSubmit, (response) => {
                // Обработка успешного ответа
                alert('Автор успешно сохранён!');
            }, (error) => {
                console.error('Ошибка при сохранении автора:', error);
            });
        } else {
            alert('Не возможно создать автора');
        }
    }

    return (
        <div className='admin-authors-form-wrapper'>
            <div>
                <button className='create-buttom' onClick={resetForm}>
                    CREATE
                </button>
            </div>
            <form className='admin-books-form'>
                <Input
                    className='text-input admin-author-firstname'
                    fieldName='firstName'
                    initialValue={selectedAuthor ? selectedAuthor.firstName : ''}
                    onChangeHandler={changeAuthorHandler}
                />
                <Input
                    className='text-input admin-author-lastname'
                    fieldName='lastName'
                    initialValue={selectedAuthor ? selectedAuthor.lastName : ''}
                    onChangeHandler={changeAuthorHandler}
                />
                <TextareaField
                    className='text-input admin-author-bio'
                    fieldName='bio'
                    initialValue={selectedAuthor ? selectedAuthor.bio : ''}
                    onChangeHandler={changeAuthorHandler}
                    rows={8}
                />
                <button
                    type='button'
                    className='save-button'
                    onClick={formSubmit}>
                    SAVE
                </button>

                    
            </form>
        </div>
    )
}

export default AdminAuthorsForm;
