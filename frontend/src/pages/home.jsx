import React, { useState, useEffect } from 'react';

import BookForm from '../components/books/BookForm';
import FilteredBooksList from '../components/books/FilteredBooksList';

const HomePage = () => {
    const [books, updateBooks] = useState([]);
    // console.log('books: ', books);

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
            // console.log('Response when first load page and get books list: ', results);
            updateBooks(results.items);
        })
    }, []);

    // handlers
    const upDataToParent = (item) => {
        updateBooks([...books, item]);
    }

    // GET FILTERED BOOKS, GENRE = ROMAN
    // const showRoman = () => {
    //     // console.log('books: ', books);
    //     const romans = books.filter(book => book.genres.some(bookGenre => bookGenre.title === 'Роман'));
    //     // console.log('romans: ', romans);
    //     updateBooks(romans);
    // }

    // ALTERNATIVE
    // const showRoman = () => {
    //     const results = [];
    //     for (let index = 0; index < books.length; index++) {
    //         const book = books[index];
    //         for (let j = 0; j < book.genres.length; j++) {
    //             const genre = book.genres[j];
    //             if (genre.title === 'Роман') {
    //                 results.push(book);
    //                 break;
    //             }
    //         }
    //     }
    //     updateBooks(results);
    // }

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
                {/* <button className='' onClick={showRoman}>
                    Show romans
                </button> */}
                <FilteredBooksList books={books}/>

                <BookForm
                    upDataToParent={upDataToParent}/>

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
                {/* Вывести список авторов, также ввиде карточек, т.е. picture, bio, firstName, lastName */}
            </div>
        </div>
    );
};

export default HomePage;
