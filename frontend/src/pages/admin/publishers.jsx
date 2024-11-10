import { useState, useEffect } from 'react';

import { fetchData, saveData } from '../../utils';
import Input from '../../components/fields/Input';
import TextareaField from '../../components/fields/TextareaField';

const AdminPublisher = (props) => {
    const [publisher, setPublisher] = useState([]); 
    const [preparedData, setPreparedData] = useState(null); 

    useEffect(() => {
        fetchData('publisher', (data) => {
            setPublisher(data);
        });
    }, []);

    const changeNewspapperHandler = (field, val) => {
        setPreparedData((prevData) => ({
            ...prevData,
            [field]: val
        }));
    }

    const setSelectedNewspapperHandler = (item) => setPreparedData({...item}); 
    const onStartCreateHandle = () => setPreparedData(null); 

    const formSubmit = () => {
        if (
            preparedData.publisherName &&
            preparedData.description &&
            preparedData.year &&
            preparedData.editorInChief
        ) {
            saveData('publisher', preparedData, (response) => {
                // Обработка успешного ответа
                alert('Издатель успешно сохранён!');
            }, (error) => {
                console.error('Ошибка при сохранении Издателя:', error);
            });
        } else {
            alert('Не возможно создать Издателя');
        }
    }

    return (
        <div className='flex'>
            <div className='admin-list-wrapper'>
                <div>
                    <ul className='admin-list'>
                        {
                            publisher.map((publisher, i) => {
                                return (
                                    <li
                                        className='pointer flex'
                                        key={`publisher-${i}`}
                                        onClick={() => setSelectedNewspapperHandler(publisher)}>

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
                        initialValue={preparedData ? preparedData.publisherName : ''}
                        onChangeHandler={changeNewspapperHandler}/>
                    <TextareaField
                        className='text-input admin-bio'
                        fieldName='description'
                        initialValue={preparedData ? preparedData.description : ''}
                        onChangeHandler={changeNewspapperHandler}
                        rows={8}/>
                    <Input
                        className='text-input admin-author-name'
                        fieldName='editorInChief'
                        initialValue={preparedData ? preparedData.editorInChief : ''}
                        onChangeHandler={changeNewspapperHandler}/>
                    <Input
                        className='text-input year-book'
                        fieldName='year'
                        inputType='number'
                        maxValue={10000}
                        initialValue={preparedData ? preparedData.year : ''}
                        onChangeHandler={changeNewspapperHandler}/>
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

export default AdminPublisher;
