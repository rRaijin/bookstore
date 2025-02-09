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
        fetchData('books', 'GET', null, (data) => setBooks(data));
        fetchData('genres', 'GET', null, (data) => setGenres(data));
    }, []);
    useEffect(() => {
        if (books.length > 0) {
            const ids = [];
            const results = books.reduce((acc, book) => {
                // Проверяем, что book.authorId и book.authorId.userId определены
                if (book.authorId && book.authorId.userId && ids.indexOf(book.authorId._id) === -1) {
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
