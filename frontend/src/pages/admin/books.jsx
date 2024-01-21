import { useState, useEffect } from 'react';

import { fetchData } from '../../utils';
import Input from '../../components/fields/Input';


const AdminBooks = (props) => {
    const [books, setBooks] = useState([]);
    const [selectedBook, setSelectedBook] = useState(null);
    const [tempData, setTempData] = useState(null);

    useEffect(() => {
        fetchData('books', setBooks);
    }, []);

    useEffect(() => {
        if (selectedBook) {
            setTempData({...selectedBook});
        }
    }, [selectedBook]);

    const changeBookHandler = (field, val) => {
        // console.log('f: ', field, 'v: ', val);
        tempData[field] = val;
        // fetch('http://localhost:3001/api/books', {
        //     method: 'PUT',
        //     headers: {
        //         'Accept': 'application/json',
        //         'Content-Type': 'application/json'
        //     },
        //     body: JSON.stringify(tempData)
        // });
    }

    const formSubmit = () => {
        console.log('submit: ', tempData);
    }
    console.log(books)
    // console.log('selectedBook: ', selectedBook);

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
                                    {book.bookName}
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
            <div className='admin-books-form-wrapper'>
                <form className='flex flex-col'>
                    <Input
                        className='text-input'
                        fieldName='bookName'
                        initialValue={(selectedBook && selectedBook.bookName) ? selectedBook.bookName : ''}
                        changeBookHandler={changeBookHandler}/>
                    <Input
                        className='text-input'
                        fieldName='description'
                        initialValue={(selectedBook && selectedBook.description) ? selectedBook.description : ''}
                        changeBookHandler={changeBookHandler}/>
                    <Input
                        className='text-input'
                        fieldName='pages'
                        initialValue={(selectedBook && selectedBook.pages) ? selectedBook.pages : ''}
                        changeBookHandler={changeBookHandler}/>
                    <Input
                        className='text-input'
                        fieldName='price'
                        initialValue={(selectedBook && selectedBook.price) ? selectedBook.price : ''}
                        changeBookHandler={changeBookHandler}/>
                    <Input
                        className='text-input'
                        fieldName='year'
                        initialValue={(selectedBook && selectedBook.year) ? selectedBook.year : ''}
                        changeBookHandler={changeBookHandler}/>
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
