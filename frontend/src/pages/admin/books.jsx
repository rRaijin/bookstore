import { useState, useEffect } from 'react';

import { fetchData, saveData } from '../../utils';
import Input from '../../components/fields/Input';
import Selector from '../../components/fields/Selector';
import FileField from '../../components/fields/FileField';
import TextareaField from '../../components/fields/TextareaField';
import Dropdown from '../../components/elements/Dropdown';


const AdminBooks = (props) => {
    const [books, setBooks] = useState([]);
    const [genres, setGenres] = useState([]);
    const [authors, setAuthors] = useState([]);
    const [selectedBook, setSelectedBook] = useState(null);
    const [preparedData, setPreparedData] = useState({});

    useEffect(() => {
        fetchData('books', (data) => setBooks(data));
        fetchData('genres', (data) => setGenres(data));
    }, []);

    useEffect(() => {
        if (books.length > 0) {
            const ids = [];
            const results = books.reduce((acc, book) => {
                if (ids.indexOf(book.authorId._id) === -1) {
                    acc.push({
                        id: book.authorId._id,
                        firstName: book.authorId.userId.firstName,
                        lastName: book.authorId.userId.lastName
                    });
                    ids.push(book.authorId._id);
                }
                return acc;
            }, []);
            setAuthors(results);
        }
    }, [books]);

    useEffect(() => {
        if (selectedBook) {
            setPreparedData({...selectedBook});
        } else {
            setPreparedData({});
        }
    }, [selectedBook]);

    const changeBookHandler = (field, val, additionalParam = null) => {
        // console.log('FFF: ', field, val)
        // if (additionalParam) console.log('ADD: ', additionalParam);
        setPreparedData((prevData) => ({
            ...prevData,
            [field]: val,
        }));
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
            alert('ALERT')
        }
    }

    const resetForm = () => {
        setSelectedBook(null);
        setPreparedData({});
    }

    // console.log('books: ', books);
    return (
        <div className='flex'>
            <div className='admin-books-list-wrapper'>
                <ul className='admin-books-list'>
                    {
                        books.map((book, i) => {
                            return (
                                <li
                                    className='pointer'
                                    key={`book-${i}`}
                                    onClick={() => setSelectedBook(book)}>

                                    <div>
                                        <strong>
                                            {book.bookName}
                                        </strong>
                                    </div>
                                    <div>
                                        Price: {book.price}
                                    </div>
                                    <div>
                                        Year: {book.year}
                                    </div>

                                </li>
                            )
                        })
                    }
                </ul>
            </div>
            <div className='admin-books-form-wrapper'>
                <div>
                    <button className='create-buttom' onClick={resetForm}>
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
        </div>
    )
}



export default AdminBooks;
