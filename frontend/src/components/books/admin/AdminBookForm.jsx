import { useState, useEffect } from 'react';

import { saveData } from '../../../utils';
import Dropdown from '../../elements/Dropdown';
import FileField from '../../fields/FileField';
import Input from '../../fields/Input';
import Selector from '../../fields/Selector';
import TextareaField from '../../fields/TextareaField';


const AdminBookForm = (props) => {
    const { selectedBook, onStartCreate, genres, authors } = props;
    const [preparedData, setPreparedData] = useState({});

    useEffect(() => {
        if (selectedBook) {
            setPreparedData({...selectedBook});
        } else {
            setPreparedData({});
        }
    }, [selectedBook]);

    const changeBookHandler = (field, val, additionalParam = null) => {
        setPreparedData((prevData) => ({
            ...prevData,
            [field]: val,
        }));
    }

    const onStartCreateHandle = () => {
        setPreparedData({});
        onStartCreate();
    }

    const formSubmit = () => {
        preparedData['imageFolder'] = 'books';
        console.log('submit data: ', preparedData);
        if (
            preparedData.authorId && 
            preparedData.genres && 
            Array.isArray(preparedData.genres) && 
            preparedData.genres.length > 0 &&
            preparedData.picture
        ) {
            saveData('books', preparedData, () => alert('OK!!!'));
        } else {
            alert('ALERT');
        }
    }

    return (
        <div className='admin-books-form-wrapper'>
            <div>
                <button className='create-buttom' onClick={onStartCreateHandle}>
                    CREATE
                </button>
            </div>
            <form className='admin-books-form'>
                <Input
                    className='text-input'
                    fieldName='bookName'
                    initialValue={(selectedBook && selectedBook.bookName) ? selectedBook.bookName : ''}
                    onChangeHandler={changeBookHandler}/>
                <TextareaField
                    className='text-input'
                    fieldName='description'
                    initialValue={(selectedBook && selectedBook.description) ? selectedBook.description : ''}
                    onChangeHandler={changeBookHandler}
                    rows={8}/>
                <Input
                    className='text-input pages-book'
                    fieldName='pages'
                    inputType='number'
                    initialValue={(selectedBook && selectedBook.pages) ? selectedBook.pages : ''}
                    onChangeHandler={changeBookHandler}/>
                <Input
                    className='text-input price-book'
                    fieldName='price'
                    inputType='number'
                    minValue={-100}
                    // maxValue={1000}
                    initialValue={(selectedBook && selectedBook.price) ? selectedBook.price : ''}
                    onChangeHandler={changeBookHandler}/>
                <Input
                    className='text-input year-book'
                    fieldName='year'
                    inputType='number'
                    maxValue={10000}
                    initialValue={(selectedBook && selectedBook.year) ? selectedBook.year : ''}
                    onChangeHandler={changeBookHandler}/>
                <Selector
                    className=''
                    fieldName='genres'
                    items={genres}
                    initialValue={(selectedBook && selectedBook.genres) ? selectedBook.genres : null}
                    onSelectHandler={changeBookHandler}/>

                <Dropdown
                    className={''}
                    items={authors}
                    initialValue={selectedBook}
                    onChangeHandler={(val) => changeBookHandler('authorId', val, 42)}/>
                    {/* onChangeHandler={(val) => {changeBookHandler('authorId', val)}}/> */}
                
                <FileField
                    className='' // overflow:hidden margin-top
                    initialValue={(selectedBook && selectedBook.picture) ? selectedBook.picture : null}
                    fieldName='picture'
                    onFileChoosed={changeBookHandler}
                    folder='books'/>
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

export default AdminBookForm;
