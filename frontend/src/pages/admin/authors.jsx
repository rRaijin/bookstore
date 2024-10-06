import { useState, useEffect } from 'react';

import { fetchData, saveData } from '../../utils';

import Input from '../../components/fields/Input';
import TextareaField from '../../components/fields/TextareaField';

const AdminAuthors = (props) => {
    const [books, setBooks] = useState([]);
    const [authors, setAuthors] = useState([]);
    const [selectedBook, setSelectedBook] = useState(null);
    const [preparedData, setPreparedData] = useState({});
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

    useEffect(() => {
        if (selectedBook) {
            setPreparedData({...selectedBook});
        } else {
            setPreparedData({});
        }
    }, [selectedBook]);

    const changeAuthorHandler = (field, val, additionalParam = null) => {
        // console.log('FFF: ', field, val)
        // if (additionalParam) console.log('ADD: ', additionalParam);
        setPreparedData((prevData) => ({
            ...prevData,
            [field]: val,
        }));
    }

    const resetForm = () => {
        setSelectedAuthor(null);
    }

    console.log('authors: ', authors);
    return (
        <div className='flex'>
            <div className='admin-authors-list-wrapper'>
                <div>
                    <ul className='admin-authors-list'>
                        {
                            authors.map((author, i) => {
                                return (
                                    <li
                                        className='pointer flex'
                                        key={`author-${i}`}
                                        onClick={() => setSelectedAuthor(author)}>

                                        <div>
                                            <strong>
                                                {author.firstName} {author.lastName}
                                            </strong>
                                        </div>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
            </div>
            <div className='admin-authors-form-wrapper'>
                <div>
                    <button className='create-buttom' onClick={resetForm}>
                        CREATE
                    </button>
                </div>
                <form className='admin-books-form'>
                        <Input
                            className='text-input admin-author-name'
                            fieldName='AuthorName'
                            initialValue={selectedAuthor ? `${selectedAuthor.firstName} ${selectedAuthor.lastName}` : ''}
                            onChangeHandler={changeAuthorHandler}/>
                        <TextareaField
                            className='text-input admin-author-bio'
                            fieldName='Bio'
                            initialValue={selectedAuthor ? `${selectedAuthor.bio}` : ''}
                            onChangeHandler={changeAuthorHandler}
                            rows={8}/>
                        
                </form>
            </div>
        </div>
    )
}



export default AdminAuthors;
