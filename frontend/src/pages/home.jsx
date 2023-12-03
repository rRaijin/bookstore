import React, { useState, useEffect } from 'react';

import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

import BookForm from '../components/books/BookForm';

const HomePage = () => {
    const [bookName, updateBookName] = useState('');
    const [description, updateDescription] = useState('');
    const [year, updateYear] = useState(null);

    const [books, updateBooks] = useState([]);
    console.log('books: ', books)

    useEffect(() => {
        fetch('http://localhost:3001/api/books', {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        }).then(async (response) => {
            if (response.ok === true);
            const results = await response.json();
            console.log('Response when first load page and get books list: ', results);
            updateBooks(results.items);
        })
    }, []);

    return (
        <div className=''>
            <div className=''>
                <h1 className=''></h1>
                Ставим яркий заголовок - у нас всегда новинки, программы лояльности и тд, картинку, контакты
                Минимум информации в блоке
            </div>

            <div className=''>
                Slider block
                Первым слайдом необходимо пользователя завлечь - предложить купон(как его получить), какая-нибудь программа лояльности, баллы иди др.
                В слайд ставим по одной книги из каждого раздела ниже + информацию про книжный клуб + 1 анонс мероприятия
            </div>

            <div className=''>
                <h2>
                    Новинки
                </h2>
                <div className=''>
                    {
                        books && Array.isArray(books) &&
                        books.map((book) => {
                            return (
                                <div className='text-red'>
                                    {book.bookName}
                                </div>
                            )
                        })
                    }
                </div>

                <BookForm />

            </div>
            <div className=''>
                <h2>
                    Топ
                </h2>
            </div>

            {/* special block */}
            <div className=''>
                <h2>
                    Біографії
                </h2>
            </div>

            <div className=''>
                <h2>
                    Ексклюзив
                </h2>
            </div>
            <div className=''>
                <h2>
                    Шкільна література
                </h2>
            </div>

            {/* special block */}
            <div className=''>
                <h2>
                    Книжковий клуб
                </h2>
            </div>

            <div className=''>
                <h2>
                    Психологія
                </h2>
            </div>

            {/* special block */}
            <div className=''>
                <h2>
                    Автори
                </h2>
            </div>
        </div>
    );
};

export default HomePage;
