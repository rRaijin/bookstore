import React, { useState, useEffect } from 'react';
import moment from 'moment';

import BookForm from '../components/books/BookForm';
import FilteredBooksList from '../components/books/FilteredBooksList';

const HomePage = () => {
    const [books, updateBooks] = useState([]);
    const [authors, updateAuthors] = useState([]);
    const [editingAuthorId, setEditingAuthorId] = useState(null);
    const [editedBio, setEditedBio] = useState('');
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
        });
        fetch('http://localhost:3001/api/authors', {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        }).then(async (response) => {
            if (response.ok === true);
            const results = await response.json();
            updateAuthors(results.items);
        });
    }, []);
    // handlers
    const upDataToParent = (item) => {
        updateBooks([...books, item]);
    }

    const handleEditBioClick = (authorId, currentBio) => {
        setEditingAuthorId(authorId);
        setEditedBio(currentBio);
      };

      const handleSaveBioClick = () => {
        console.log('Сохранено:', editedBio);
        setEditingAuthorId(null);
      };
    
      const handleCancelEditClick = () => {
        setEditingAuthorId(null);
      };
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

    const getItemsByDate = (item) => {
        return moment().diff(moment(item.createdAt), 'days') <= 3;
    }

    // console.log('moment now: ', moment());

    // task 1 По нажатию на био автора открывается textarea поле для редактирования био, 
    // в которое передается изначальное значение, возле поля кнопка сохранения, которая просто выведет результат
    // ввода в консоль и вернет обратно прежний вид


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
                <FilteredBooksList
                    condition={getItemsByDate}
                    books={books}/>

                <BookForm
                    upDataToParent={upDataToParent}/>

            </div>
            <div className=''>
                <h2>
                    Топ
                </h2>
                <FilteredBooksList
                    books={books}/>
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
                    Авторы
                </h2>
                {/* Вывести список авторов, также ввиде карточек, т.е. picture, bio, firstName, lastName */}
                {/* // css переделать */}
                <div className='author-card'>
                {
                    authors.map((author, i) => (
                        <div key={`author-${i}`} className=''>
                            <div className='author-name'>
                            {author.userId.firstName} {author.userId.lastName}
                            </div>
                            <img className='authors-img' src={`/books/${author.picture}`} alt={`${author.userId.firstName} ${author.userId.lastName}`} />

                            {editingAuthorId === author.userId._id ? (
                            <div>
                                <textarea
                                className='author-bio'
                                value={editedBio}
                                onChange={(e) => setEditedBio(e.target.value)}
                                />
                                <button onClick={handleSaveBioClick}>Сохранить</button>
                                <button onClick={handleCancelEditClick}>Отмена</button>
                            </div>
                            ) : (
                            <div>
                                <div className='author-bio'>{author.bio}</div>
                                <button onClick={() => handleEditBioClick(author.userId._id, author.bio)}>Редактировать</button>
                            </div>
                            )}
                        </div>
                    ))
                }
                </div>

            </div>
        </div>
    );
};

export default HomePage;
