import { useState, useEffect, Fragment } from 'react';

import { saveData } from '../../../utils';
import Dropdown from '../../elements/Dropdown';
import FileField from '../../fields/FileField';
import Input from '../../fields/Input';
import Selector from '../../fields/Selector';
import TextareaField from '../../fields/TextareaField';
import Btn from '../../elements/buttons/Btn';


// 1. кнопку сделать , 1/3 родителя и сдвинуть вправо


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
        // if (
        //     preparedData.authorId && 
        //     preparedData.genres && 
        //     Array.isArray(preparedData.genres) && 
        //     preparedData.genres.length > 0 &&
        //     preparedData.picture
        // ) {
        //     saveData('books', preparedData, () => alert('OK!!!'));
        // } else {
        //     alert('ALERT');
        // }
    }

    return (
        <div className='admin-books-section'>
            <div className='admin-books-btn-wrapper'>
                <Btn
                    className='btn-green text-lg uppercase font-base'
                    onClickHandle={onStartCreateHandle}
                    btnText='create'/>
            </div>
            <div className='admin-books-form-wrapper shadow-md'>
                <form className='admin-books-form'>
                    <div className='flex'>
                        <div className='w-50p'>
                            <Input
                                className='text-input'
                                fieldName='bookName'
                                initialValue={(selectedBook && selectedBook.bookName) ? selectedBook.bookName : ''}
                                onChangeHandler={changeBookHandler}/>
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
                        </div>
                        <div className='w-50p ml-5'>
                            <TextareaField
                                className='text-input'
                                fieldName='description'
                                initialValue={(selectedBook && selectedBook.description) ? selectedBook.description : ''}
                                onChangeHandler={changeBookHandler}
                                rows={8}/>
                        </div>
                    </div>
                    <div className=''>
                        <Selector
                            className=''
                            fieldName='genres'
                            items={genres}
                            initialValue={(selectedBook && selectedBook.genres) ? selectedBook.genres : null}
                            onSelectHandler={changeBookHandler}/>
                    </div>
                    <div className='flex'>
                        <div className='w-50p'>
                            <Dropdown
                                className={''}
                                items={authors}
                                initialValue={selectedBook}
                                onChangeHandler={(val) => changeBookHandler('authorId', val, 42)}/>
                        </div>
                        <div className='w-50p ml-5'>
                            <FileField
                                className=''
                                initialValue={(selectedBook && selectedBook.picture) ? selectedBook.picture : null}
                                fieldName='picture'
                                onFileChoosed={changeBookHandler}
                                folder='books'/>
                        </div>
                    </div>



                    
                    
                    
                    

                    
                    

                    <Btn
                        className='btn-blue text-lg uppercase font-base'
                        onClickHandle={formSubmit}
                        btnText='save'/>
                </form>
            </div>
        </div>
    )
}

export default AdminBookForm;
