import { useState, useEffect } from 'react';

import { saveData } from '../../../utils';
import Input from '../../fields/Input';
import TextareaField from '../../fields/TextareaField';
import Btn from '../../elements/buttons/Btn';



const AdminAuthorsForm = (props) => {
    const { selectedAuthor, onStartCreate } = props;
    const [preparedData, setPreparedData] = useState({});
    console.log(selectedAuthor)
    useEffect(() => {
        if (selectedAuthor) {
            setPreparedData({...selectedAuthor});
        } else {
            setPreparedData({});
        }
    }, [selectedAuthor]);

    const changeAuthorHandler = (field, val) => {
        setPreparedData((prevData) => ({
            ...prevData,
            [field]: val,
            userId: selectedAuthor ? selectedAuthor.userId : null
        }));
    }

    const onStartCreateHandle = () => {
        setPreparedData({});
        onStartCreate();
    }

    const formSubmit = () => {
        if (
            preparedData.lastName &&
            preparedData.bio &&
            preparedData.firstName &&
            preparedData.userEmail
        ) {
            saveData('authors', preparedData, (response) => {
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
        <div className='admin-form-wrapper'>
            <div className='admin-books-btn-wrapper'>
                <Btn
                    className='btn-green text-lg uppercase font-base'
                    onClickHandle={onStartCreateHandle}
                    btnText='create'/>
            </div>
            <form className='admin-books-form'>
                <Input
                    className='text-input admin-author-name'
                    fieldName='firstName'
                    initialValue={selectedAuthor ? selectedAuthor.firstName : ''}
                    onChangeHandler={changeAuthorHandler}/>
                <Input
                    className='text-input admin-author-lastname'
                    fieldName='lastName'
                    initialValue={selectedAuthor ? selectedAuthor.lastName : ''}
                    onChangeHandler={changeAuthorHandler}/>
                <Input
                    className='text-input admin-author-lastname'
                    fieldName='userEmail'
                    initialValue={selectedAuthor ? selectedAuthor.userEmail : ''}
                    onChangeHandler={changeAuthorHandler}/>
                <TextareaField
                    className='text-input admin-bio'
                    fieldName='bio'
                    initialValue={selectedAuthor ? selectedAuthor.bio : ''}
                    onChangeHandler={changeAuthorHandler}
                    rows={8}/>
                <div>
                    <Btn
                        className='btn-blue text-lg uppercase font-base w-50p float-r'
                        onClickHandle={formSubmit}
                        btnText='save'/>
                </div>
            </form>
        </div>
    )
}

export default AdminAuthorsForm;
