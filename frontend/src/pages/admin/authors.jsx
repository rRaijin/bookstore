import { useState, useEffect } from 'react';

import { fetchData, saveData } from '../../utils';

import AdminAuthorsList from '../../components/authors/admin/AdminAuthorsList';
import AdminAuthorsForm from '../../components/authors/admin/AdminAuthorsForm';

const AdminAuthors = (props) => {
    const [authors, setAuthors] = useState([]);
    const [authors2, setAuthors2] = useState([]);

    const [selectedAuthor, setSelectedAuthor] = useState(null);

    useEffect(() => {
        fetchData('authors', (data) => {
            console.log('data: ', data);
            setAuthors(data);
    });
    }, []);

    useEffect(() => {
        if (authors.length > 0) {
            const ids = [];
            const results = authors.reduce((acc, author) => {
                if (ids.indexOf(author.userId._id) === -1) {
                    acc.push({
                        id: author.userId._id,
                        firstName: author.userId.firstName,
                        lastName: author.userId.lastName,
                        userEmail: author.userId.userEmail,
                        bio: author.bio,
                        userId: author.userId._id
                    });
                    ids.push(author.userId._id);
                }
                return acc;
            }, []);
            setAuthors2(results);
        }
    }, [authors]);
    console.log(authors)
    
    const resetForm = () => setSelectedAuthor(null);
    
    return (
        <div className='flex'>
            <AdminAuthorsList
                authors={authors2}
                onAuthorSelected={setSelectedAuthor}/>

            <AdminAuthorsForm
                selectedAuthor={selectedAuthor}
                onStartCreate={resetForm}/>
        </div>
    )
}

export default AdminAuthors;
