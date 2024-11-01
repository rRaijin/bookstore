import { useState, useEffect } from 'react';

import { fetchData, saveData } from '../../utils';
import Input from '../../components/fields/Input';
import TextareaField from '../../components/fields/TextareaField';

const AdminNewspapper = (props) => {
    const { onStartCreate } = props;
    const [newspapers, setNewspapers] = useState([]);
    const [preparedData, setPreparedData] = useState([]);
    const [selectedNewspapper, setSelectedNewspapper] = useState(null);

    useEffect(() => {
        fetchData('newspapers', (data) => {
            console.log('data: ', data);
            setNewspapers(data);
    });
    }, []);
    console.log(newspapers)

    useEffect(() => {
        if (newspapers.length > 0) {
            const ids = [];
            const results = newspapers.reduce((acc, newspaper) => {
                if (ids.indexOf(newspaper._id) === -1) {
                    acc.push({
                        // newspaperName: newspaper.userId.newspaperName
                    });
                    ids.push(newspaper._id);
                }
                return acc;
            }, []);
            setNewspapers(results);
        }
    }, [newspapers]);
    // console.log(newspapers)
    
    console.log(selectedNewspapper)
    useEffect(() => {
        if (selectedNewspapper) {
            setPreparedData({...selectedNewspapper});
        } else {
            setPreparedData({});
        }
    }, [selectedNewspapper]);

    const changeNewspapperHandler = (field, val) => {
        setPreparedData((prevData) => ({
            ...prevData,
            [field]: val,
            // userId: selectedAuthor ? selectedAuthor.userId : null
        }));
    }

    const onStartCreateHandle = () => {
        setPreparedData({});
        onStartCreate();
    }

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
                                        onClick={() => setSelectedNewspapper(newspaper)}>

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
                        // initialValue={selectedAuthor ? selectedAuthor.firstName : ''}
                        onChangeHandler={changeNewspapperHandler}/>
                    <Input
                        className='text-input admin-author-lastname'
                        fieldName='description'
                        // initialValue={selectedAuthor ? selectedAuthor.userEmail : ''}
                        onChangeHandler={changeNewspapperHandler}/>
                    <Input
                        className='text-input year-book'
                        fieldName='year'
                        inputType='number'
                        maxValue={10000}
                        // initialValue={(selectedBook && selectedBook.year) ? selectedBook.year : ''}
                        onChangeHandler={changeNewspapperHandler}/>
                    <TextareaField
                        className='text-input admin-author-bio'
                        fieldName='publisher'
                        // initialValue={selectedAuthor ? selectedAuthor.bio : ''}
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
