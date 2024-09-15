import { useState, useEffect } from 'react';


import { fetchData, saveData } from '../../utils';
import Input from '../../components/fields/Input';
import FileField from '../../components/fields/FileField';
import TextareaField from '../../components/fields/TextareaField';


const AdminBooks = (props) => {
    const [books, setBooks] = useState([]);
    const [selectedBook, setSelectedBook] = useState(null);
    const [tempData, setTempData] = useState({});
    const [allGenres, setAllGenres] = useState([])

    useEffect(() => {
        fetchData('books', (data) => {
            setBooks(data);
            extractGenresFromBooks(data);
        });
    }, []);

    useEffect(() => {
        if (selectedBook) {
            setTempData({
                ...selectedBook,
                genres: selectedBook.genres ? selectedBook.genres.map((g) => g.title) : []
            });
        } else {
            setTempData({});
        }
    }, [selectedBook]);

    const changeBookHandler = (field, val) => {
        console.log('FFF: ', field, val)
        setTempData((prevData) => ({
            ...prevData,
            [field]: val,
        }));
    }

    const formSubmit = () => {
        tempData['imageFolder'] = 'books';
        console.log('submit data: ', tempData);
        saveData('books', tempData, () => alert('OK!!!'));
    }

    const resetForm = () => {
        setSelectedBook(null);
        setTempData({});
    }

    // 1. Сделать css для инпутов (лейблы), для текстарии
    // 2. Добавить селектор для передачи выбранного жанра (он будет один)
    // 3. Добавить компонент (для формы), который будет позволять множественный выбор. (чекбокс)
    // 4. На следующий урок показать предачу компонента как свойство
    function handleGenreCheckboxChange(genre) {
        setTempData((prevData) => {
            const updatedGenres = prevData.genres ? [...prevData.genres] : [];
            if (updatedGenres.includes(genre)) {
                return {
                    ...prevData,
                    genres: updatedGenres.filter((g) => g !== genre),
                };
            } else {
                return {
                    ...prevData,
                    genres: [...updatedGenres, genre],
                };
            }
        });
    }

    const extractGenresFromBooks = (books) => {
        const genresSet = new Set();
        books.forEach((book) => {
            if (book.genres) {
                book.genres.forEach((genre) => genresSet.add(genre.title));
            }
        });
        setAllGenres([...genresSet]);
    };

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
                    <button className='create-battom' onClick={resetForm}>
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
                        className='text-input ml-40px'
                        fieldName='pages'
                        inputType='number'
                        initialValue={(selectedBook && selectedBook.pages) ? selectedBook.pages : ''}
                        onChangeHandler={changeBookHandler}/>
                    <Input
                        className='text-input ml-46-5px'
                        fieldName='price'
                        inputType='number'
                        minValue={-100}
                        // maxValue={1000}
                        initialValue={(selectedBook && selectedBook.price) ? selectedBook.price : ''}
                        onChangeHandler={changeBookHandler}/>
                    <Input
                        className='text-input ml-51px'
                        fieldName='year'
                        inputType='number'
                        maxValue={10000}
                        initialValue={(selectedBook && selectedBook.year) ? selectedBook.year : ''}
                        onChangeHandler={changeBookHandler}/>
                    <Input
                        className='text-input'
                        fieldName='genres'
                        inputType='checkbox'
                        options={allGenres}
                        initialValue={tempData.genres || []}
                        onChangeHandler={changeBookHandler}/>
                    <FileField
                        initialValue={(selectedBook && selectedBook.picture) ? selectedBook.picture : null}
                        fieldName='picture'
                        onFileChoosed={changeBookHandler}
                        folder='books'/>
                    <button
                        type='button'
                        className='save-botton'
                        onClick={formSubmit}>
                        SAVE
                    </button>
                </form>
            </div>
        </div>
    )
}



export default AdminBooks;
