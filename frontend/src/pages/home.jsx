import React, { useState, useEffect, useContext } from 'react';
import moment from 'moment';

import { fetchData } from '../utils';
import { MyContext } from '../MyContext';
import BookForm from '../components/books/BookForm';
import FilteredBooksList from '../components/books/FilteredBooksList';

const HomePage = () => {
    const [books, updateBooks] = useState([]);
    const [authors, updateAuthors] = useState([]);
    const [editingAuthorId, setEditingAuthorId] = useState(null);
    const [editedBio, setEditedBio] = useState('');
    const [animalSound, setAnimalSound] = useState('');

    // Используем контекст
    const { setText } = useContext(MyContext);

    // 1. по запросу вернуть с сервера массив чисел [1, 2, 3, 4, 5] из роута books
    // 2. написать по одному аналогичному запросу в каждом роуте, вернуть данные по желанию

    const getAnimalSound = (animalType) => {
        fetch(`http://localhost:3001/api/animalSound?type=${animalType}`)
            .then(response => response.json())
            .then(data => {
                setAnimalSound(data.sound);
            })
            .catch(error => {
                console.error('Ошибка при получении звука животного:', error);
            });
    };

    useEffect(() => {
        fetchData('books', updateBooks);
        fetchData('authors', updateAuthors);
        
        fetch('http://localhost:3001/api/books/test', {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        }).then(async (response) => {
            if (response.ok === true);
            // const results = await response.json();
            // console.log('res; ', results)
        });
    }, []);

    useEffect(() => {
        /*
            1. http://localhost:3001 - это адрес сервера
            2. /api/books - это условный хаб, содержащий в себе набор обрабатываемых урл-запросов,
            подключается в главном серверном файле
            3.1. /books - это имя роутера внутри хаба
            *** на каждое имя может быть по одному(!не больше, иначе
            второй будет проигнорирован) роутеру для GET, POST, PUT, DELETE, PATCH etc
            3.2 ?id=1&x=1&y=2 - параметры запроса, разделяются символом "&", начинаются с символа "?",
            система после знака вопроса начинает читать строку до первого попавшегося символа "=", эта
            строка будет считаться ключом, после этого читает все, что идет после символа "=" до символа
            "&"
        */
        const fetchUrl = 'http://localhost:3001/api/books/books?id=1&x=1&y=2&special=true';
        // const fetchUrl = 'http://localhost:3001/api/books/books?d=1&(x=1&y$=2%%%&H';
            

        fetch(fetchUrl, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
        }).then(async (response) => {
            if (response.ok === true);
            const results = await response.json();
            console.log('res; ', results);
        });

        fetch(fetchUrl, {
            method: 'DELETE',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                id:12,
                x: '1',
                y:2,
                special: true
            })
        }).then(async (response) => {
            if (response.ok === true);
            const results = await response.json();
            console.log('res; ', results);
        });
    }, []);

    useEffect(() => {
        fetch('http://localhost:3001/api/books/books2', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                x: 1, y:56
            })
        }).then(async (response) => {
            if (response.ok === true);
            const results = await response.json();
            console.log('res; ', results);
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



    // my home test 1
    const testHandler = (value) => {
        fetch(`http://localhost:3001/api/books/testSend?x=${value}`, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        }).then(async (response) => {
            const results = await response.json();
            console.log('res; ', results);
        });
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

    const getItemsByDate = (item) => {
        return moment().diff(moment(item.createdAt), 'days') <= 3;
    }

    return (
        <div className=''>
            <div className=''>
                <h1 className=''></h1>
                Ставим яркий заголовок - у нас всегда новинки, программы лояльности и тд, картинку, контакты
                Минимум информации в блоке
            </div>
            <div>
                <button onClick={() => getAnimalSound('кот')}>Получить звук кота</button>
                <button onClick={() => getAnimalSound('собака')}>Получить звук собаки</button>
                <button onClick={() => getAnimalSound('корова')}>Получить звук коровы</button>
                <button onClick={() => getAnimalSound('коза')}>Получить звук козы</button>

                {animalSound && <p>Звук: {animalSound}</p>}
            </div>

            <div>
                <div onClick={() => testHandler(1)}>1</div>
                <div onClick={() => testHandler(2)}>2</div>
                <div onClick={() => testHandler(3)}>3</div>
                <div onClick={() => testHandler(4)}>4</div>
                <div onClick={() => testHandler(5)}>5</div>
            </div>

            <div className=''>
                Slider block
                Первым слайдом необходимо пользователя завлечь - предложить купон(как его получить), какая-нибудь программа лояльности, баллы иди др.
                В слайд ставим по одной книги из каждого раздела ниже + информацию про книжный клуб + 1 анонс мероприятия
            </div>

            <button onClick={() => setText('Hello, world!')}>
                Click me
            </button>

            <div className=''>
                <h2>
                    Новинки
                </h2>
                <FilteredBooksList
                    condition={getItemsByDate}
                    books={books}/>

                {/* <BookForm
                    upDataToParent={upDataToParent}/> */}

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
                <div className='author-card'>
                {
                    authors.map((author, i) => (
                        <div key={`author-${i}`} className=''>
                            <div className='author-name'>
                                {author.userId.firstName} {author.userId.lastName}
                            </div>
                            <img
                                className='authors-img'
                                src={`/books/${author.picture}`}
                                alt={`${author.userId.firstName} ${author.userId.lastName}`}/>
                            {
                                editingAuthorId === author.userId._id ?
                                <div>
                                    <textarea
                                        className='author-bio'
                                        value={editedBio}
                                        onChange={(e) => setEditedBio(e.target.value)}/>
                                    <button onClick={handleSaveBioClick}>
                                        Сохранить
                                    </button>
                                    <button onClick={handleCancelEditClick}>
                                        Отмена
                                    </button>
                                </div>
                                :
                                <div>
                                    <div className='author-bio'>{author.bio}</div>
                                    <button onClick={() => handleEditBioClick(author.userId._id, author.bio)}>
                                        Редактировать
                                    </button>
                                </div>
                            }
                        </div>
                    ))
                }
                </div>
            </div>
        </div>
    );
};

export default HomePage;
