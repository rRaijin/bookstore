import { useState } from 'react';

import BookDetail from '../components/books/BookDetail';
import menu1 from '../mock/menu.json';
import Blink from '../components/books/Blink';
import MyInputComponent from '../components/books/MyInput';
import MinMax20 from '../books/MinMax20';

const BookPage = () => {
    const [myInputName, setMyInputName] = useState('');
    const myChangeHandlerName = (e) => {
        // console.log('dt: ', e);
        setMyInputName(e.target.value);
    }

    // В квадратных скобках указывается 2 элемента -> 1й - это единица состояния, а 2я - установщик(изменяет)
    const [myInputPriceMin, setMyInputPriceMin] = useState(0);
    const myChangeHandlerPriceMin = (e) => {
        setMyInputPriceMin(e.target.value);
    }

    const [myInputPriceMax, setMyInputPriceMax] = useState(10000);
    const myChangeHandlerPriceMax = (e) => {
        setMyInputPriceMax(e.target.value);
    }

    const [selectedGenre, setSelectedGenre] = useState(null);
    const mySelect = (e) => {
        console.log('dt: ', e.target.value);
        setSelectedGenre(e.target.value);
    }

    const genres = [
        {id: 1, title: 'Роман'},
        {id: 2, title: 'Детская литература'},
        {id: 3, title: 'Сатира'},
        {id: 4, title: 'Детектив'},
        {id: 5, title: 'Приключенческая художественная литература'},
        {id: 6, title: 'Научная фантастика'},
        {id: 7, title: 'Новелла'}
    ];

    const stars = [
        {
            id: 1,
            picture: 'star.png'
        },
        {
            id: 2,
            picture: 'star.png',
            picture: 'star.png'
        },
        {
            id: 3,
            picture: 'star.png',
            picture: 'star.png',
            picture: 'star.png'
        },
        {
            id: 4,
            picture: 'star.png',
            picture: 'star.png',
            picture: 'star.png',
            picture: 'star.png'
        },
        {
            id: 5,
            picture: 'star.png',
            picture: 'star.png',
            picture: 'star.png',
            picture: 'star.png',
            picture: 'star.png'
        }
    ]

    const authors = [
        {
            id: 1,
            firstName: 'Марк',
            lastName: 'Твен'
        },
        {
            id: 2,
            firstName: 'author'
        },
        {
            id: 3,
            firstName: 'Артур',
            lastName: 'Конан Дойл'
        },
        {
            id: 4,
            firstName: 'Элинор',
            lastName: 'Портер'
        },
        {
            id: 5,
            firstName: 'Роберт',
            lastName: 'Льюис Стивенсон'
        },
        {
            id: 6,
            firstName: 'Жуль',
            lastName: 'Верн'
        },
        {
            id: 7, 
            firstName: 'Антуан де',
            lastName: 'Сент-Экзюпери'
        }
    ];

    const books = [
        {
            bookName: 'Приключения Тома Сойера',
            description: 'Какое-то описание книги',
            year: 1876,
            genre: [1, 2, 3],
            price: 500,
            author: 1,
            picture: 'tom_soyer.jpg',
            star: 1,
            link: 'TomSoyer.jsx'
        },
        {
            bookName: 'Детектив-1',
            // description: null,
            description: 'Какое-то описание книги',
            year: 2000,
            genre: [1, 4],
            price: 2000,
            author: 2,
            picture: 'starvi.webp'
        },
        {
            bookName: 'Приключения Шерлока Холмса',
            description: 'Супер описание книги',
            year: 1892,
            genre: [4],
            price: 800,
            author: 3,
            picture: 'Adventures_of_sherlock_holmes.jpg'
        },
        {
            bookName: 'Поллианна',
            description: 'Обычное описание книги',
            year: 1913,
            genre: [1, 2],
            price: 1000,
            author: 4,
            picture: 'poliana.jpg'
        },
        {
            bookName: 'Остров Сокровищ',
            description: 'роман шотландского писателя Роберта Стивенсона о приключениях, связанных с поиском сокровищ, спрятанных капитаном Флинтом на необитаемом острове.',
            year: 1883,
            genre: [1, 2],
            price: 400,
            author: 5,
            picture: 'treasureIsland.jpg'
        },
        {
            bookName: 'Пять недель на воздушном шаре',
            description: 'Первый приключенческий роман Жюля Верна.',
            year: 1863,
            genre: [1, 5],
            price: 500,
            author: 6,
            picture: 'Five_weeks_in_a_hot_air_balloon.jpg'
        },
        {
            bookName: 'Двадцать тысяч льё под водой',
            description: 'Профессор Аронакс и его друзья волею судьбы оказываются на борту подводного судна «Наутилус», которым управляет загадочный капитан Немо.',
            year: 1870,
            genre: [1, 6],
            price: 300,
            author: 6,
            picture: 'twenty_thousand_leagues_under_the_sea.jpg'
        },
        {
            bookName: 'Маленький принц',
            description: 'Сказка рассказывает о Маленьком принце, который посещает различные планеты в космосе, включая Землю. Книга обращается к темам одиночества, дружбы, любви и утраты.',
            year: 1943,
            genre: [2, 7],
            price: 349,
            author: 7,
            picture: 'a_little_prince.jpg'
        }
    ];

    const filteredBooks = books.filter(x => {
        return (
            x.price > myInputPriceMin &&
            x.price < myInputPriceMax &&
            (x.bookName.includes(myInputName) || myInputName === '') &&
            (Number(selectedGenre) === 0 || x.genre.indexOf(Number(selectedGenre)) !== -1)
        )
    });

    // console.log('state name: ', myInputName);
    // console.log('state price min: ', myInputPriceMin);
    // console.log('state price max: ', myInputPriceMax);
    // console.log('props books: ', selectedGenre);

    // ООП
    // 1. парадигма
    // 2. модульность, декомпозиция, много кода
    // 3. рефакторинг, поддержка, использование в нескольких местах.
    // 4. абстракция, наследование.

    {/* <div className='mt-240'>
                <FontAwesomeIcon
                    icon={faCoffee}
                    color='#29d879'
                    spin={true}
                    size={'5x'}/>

                <FontAwesomeIcon icon={faHouse}/>
                <FontAwesomeIcon
                 icon={faSoccerBall}
                 size={'3x'}/>
                 <FontAwesomeIcon icon={faTree}
                 size={'3x'}/>
                 <FontAwesomeIcon icon={faHeartCircleMinus}
                 size={'3x'}/>
                 <FontAwesomeIcon icon={faHeartPulse}
                 size={'3x'}/>
                 <FontAwesomeIcon icon={faMoneyBill}
                 size={'3x'}/>
            </div>

            <div className='mt-240'>
                <Button variant="text">Text</Button>
                <Button variant="contained">Contained</Button>
                <Button variant="outlined">Outlined</Button>
            </div>
            <div>
                
            </div> */}

    return (
        <div className=''>
            <Blink/>
            <MinMax20/>
            


            <label>Я шукаю:</label>
            <input className='w-20p0'
                type='input'
                value={myInputName}
                onChange={myChangeHandlerName}/>

            <label>Ціна:</label>
            <input
                type='number'
                // min={0}
                // max={5000}
                value={myInputPriceMin}
                onChange={myChangeHandlerPriceMin}/>
            <input
                type='number'
                value={myInputPriceMax}
                onChange={myChangeHandlerPriceMax}/> 

            <select name="select" onChange={mySelect}>
                {
                    genres.map(((g, i) => {
                        return (
                            <option value={g.id} key={`genre-${i}`}>
                                {g.title}
                            </option>
                        )
                    }))
                }
                <option value={0} key={`genre-${genres.length + 1}`}>
                    All
                </option>
            </select>

            {
                filteredBooks.map((book, index) => { 
                    return (
                        <BookDetail
                            item={book}
                            key={`book_${index}`}
                            genres={genres}
                            authors={authors}
                            stars={stars}/>
                    )
                })
            }
        </div>
    );
}

export default BookPage;
