import { useState, useEffect } from 'react';


import { fetchData, saveData } from '../../utils';
import Input from '../../components/fields/Input';
import FileField from '../../components/fields/FileField';
import TextareaField from '../../components/fields/TextareaField';


const AdminBooks = (props) => {
    const [books, setBooks] = useState([]);
    const [selectedBook, setSelectedBook] = useState(null);
    const [tempData, setTempData] = useState({});

    useEffect(() => {
        fetchData('books', setBooks);
    }, []);

    useEffect(() => {
        if (selectedBook) {
            setTempData({...selectedBook});
        }
    }, [selectedBook]);

    const changeBookHandler = (field, val) => {
        console.log('FFF: ', field, val)
        tempData[field] = val;
    }

    const formSubmit = () => {
        tempData['imageFolder'] = 'books';
        console.log('submit: ', tempData);
        // saveData('books', tempData, () => alert('OK!!!'));
    }

    const resetForm = () => {
        setSelectedBook(null);
        setTempData(null);
    }

    // 1. Для поля description написать компнент для Textarea тега, он должен принимать className,
    // initialValue, fieldName, changeBookHandler и устанавливаемое значение строк.
    // 2. сделать форму симпатичней
    // 3. кроме имени книги в навигации слева выводить цену и год книги.

    return (
        <div className='flex'>
            <div className='admin-books-list-wrapper'>
                <ul className='admin-books-list'>
                    {
                        books.map((book, i) => {
                            return (
                                <li
                                    className=''
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
                    <button className='' onClick={resetForm}>
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
                        className='text-input'
                        fieldName='pages'
                        initialValue={(selectedBook && selectedBook.pages) ? selectedBook.pages : ''}
                        onChangeHandler={changeBookHandler}/>
                    <Input
                        className='text-input'
                        fieldName='price'
                        inputType='number'
                        minValue={-100}
                        // maxValue={1000}
                        initialValue={(selectedBook && selectedBook.price) ? selectedBook.price : ''}
                        onChangeHandler={changeBookHandler}/>
                    <Input
                        className='text-input'
                        fieldName='year'
                        maxValue={10000}
                        initialValue={(selectedBook && selectedBook.year) ? selectedBook.year : ''}
                        onChangeHandler={changeBookHandler}/>
                    <FileField
                        initialValue={(selectedBook && selectedBook.picture) ? selectedBook.picture : null}
                        fieldName='picture'
                        onFileChoosed={changeBookHandler}
                        folder='books'/>
                    <button
                        type='button'
                        className=''
                        onClick={formSubmit}>
                        save
                    </button>
                </form>
            </div>
        </div>
    )
}



export default AdminBooks;
