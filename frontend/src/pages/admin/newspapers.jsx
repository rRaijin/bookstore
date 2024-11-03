import { useState, useEffect } from 'react';

import { fetchData, saveData } from '../../utils';
import Input from '../../components/fields/Input';
import TextareaField from '../../components/fields/TextareaField';

const AdminNewspapper = (props) => {
    const [newspapers, setNewspapers] = useState([]); // храним все газеты
    const [preparedData, setPreparedData] = useState(null); // храним предварительный объект отправки данный на сервер

    useEffect(() => {
        fetchData('newspaper', (data) => {
            setNewspapers(data);
        });
    }, []);

    const changeNewspapperHandler = (field, val) => {
        setPreparedData((prevData) => ({
            ...prevData,
            [field]: val
        }));
    }

    const setSelectedNewspapperHandler = (item) => setPreparedData({...item}); // устанавливает подготовленній к редактированию объект
    const onStartCreateHandle = () => setPreparedData(null); // сброс

    const formSubmit = () => {
        if (
            preparedData.newspaperName &&
            preparedData.description &&
            preparedData.year &&
            preparedData.publisher
        ) {
            saveData('newspaper', preparedData, (response) => {
                // Обработка успешного ответа
                alert('Газета успешно сохранён!');
            }, (error) => {
                console.error('Ошибка при сохранении газеты:', error);
            });
        } else {
            alert('Не возможно создать газету');
        }
    }

    return (
        <div>
            <div className='admin-authors-list-wrapper'>
                <div>
                    <ul className='admin-authors-list'>
                        {
                            newspapers.map((newspaper, i) => {
                                return (
                                    <li
                                        className='pointer flex'
                                        key={`newspaper-${i}`}
                                        onClick={() => setSelectedNewspapperHandler(newspaper)}>

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
            <div className='admin-authors-form-wrapper'>
                <div>
                    <button className='create-buttom' onClick={onStartCreateHandle}>
                        CREATE
                    </button>
                </div>
                <form className='admin-books-form'>
                    <Input
                        className='text-input admin-author-firstname'
                        fieldName='newspaperName'
                        initialValue={preparedData ? preparedData.newspaperName : ''}
                        onChangeHandler={changeNewspapperHandler}/>
                    <Input
                        className='text-input admin-author-lastname'
                        fieldName='description'
                        initialValue={preparedData ? preparedData.description : ''}
                        onChangeHandler={changeNewspapperHandler}/>
                    <Input
                        className='text-input year-book'
                        fieldName='year'
                        inputType='number'
                        maxValue={10000}
                        initialValue={preparedData ? preparedData.year : ''}
                        onChangeHandler={changeNewspapperHandler}/>
                    <TextareaField
                        className='text-input admin-author-bio'
                        fieldName='publisher'
                        initialValue={preparedData ? preparedData.publisher : ''}
                        onChangeHandler={changeNewspapperHandler}
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

export default AdminNewspapper;
