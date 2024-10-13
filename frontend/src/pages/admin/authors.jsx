import { useState, useEffect } from 'react';

import { fetchData, saveData } from '../../utils';

import AdminAuthorsList from '../../components/authors/admin/AdminAuthorsList';
import AdminAuthorsForm from '../../components/authors/admin/AdminAuthorsForm';

const AdminAuthors = (props) => {
    const [books, setBooks] = useState([]);
    const [authors, setAuthors] = useState([]);
    const [selectedAuthor, setSelectedAuthor] = useState(null);


    useEffect(() => {
        fetchData('books', (data) => setBooks(data));
    }, []);
    

    useEffect(() => {
        if (books.length > 0) {
            const ids = [];
            const results = books.reduce((acc, book) => {
                if (ids.indexOf(book.authorId._id) === -1) {
                    acc.push({
                        id: book.authorId._id,
                        firstName: book.authorId.userId.firstName,
                        lastName: book.authorId.userId.lastName,
                        bio: book.authorId.bio
                    });
                    ids.push(book.authorId._id);
                }
                return acc;
            }, []);
            setAuthors(results);
        }
    }, [books]);
    
    const resetForm = () => {
        setSelectedAuthor(null);
    }
    

    return (
        <div className='flex'>

            <AdminAuthorsList
                authors={authors}
                selectedAuthor={setSelectedAuthor}
            />

            <AdminAuthorsForm
                selectedAuthor={selectedAuthor}
                onStartCreate={resetForm}
                authors={authors}
                setSelectedAuthor={setSelectedAuthor}            
            />
        </div>
    )
}



export default AdminAuthors;
