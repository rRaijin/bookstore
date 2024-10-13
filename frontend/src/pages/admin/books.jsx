import { useState, useEffect } from 'react';

import { fetchData } from '../../utils';
import AdminBooksList from '../../components/books/admin/AdminBooksList';
import AdminBookForm from '../../components/books/admin/AdminBookForm';


const AdminBooks = (props) => {
    const [books, setBooks] = useState([]);
    const [genres, setGenres] = useState([]);
    const [authors, setAuthors] = useState([]);
    const [selectedBook, setSelectedBook] = useState(null);

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

    const resetForm = () => setSelectedBook(null);

<<<<<<< HEAD
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
    console.log('preparedData: ', preparedData);
    const resetForm = () => {
        setSelectedBook(null);
        setPreparedData({});
    }

    // console.log('books: ', books);
=======
>>>>>>> dbb530ff2cb2e8cdc92728eff57ead29f2ff6bd7
    return (
        <div className='flex'>
            <AdminBooksList
                books={books}
                onBookSelected={setSelectedBook}/>

            <AdminBookForm
                selectedBook={selectedBook}
                onStartCreate={resetForm}
                genres={genres}
                authors={authors}/>
        </div>
    )
}



export default AdminBooks;
