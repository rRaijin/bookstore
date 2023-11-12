import { useState } from 'react';

import authors from '../mock/authors.json';
import books from '../mock/books.json';
import genres from '../mock/genres.json';
import BookPreview from '../components/books/BookPreview';
import BooksPagePreText from '../components/books/BooksPagePreText';


const BookPage = () => {
    const [myInputName, setMyInputName] = useState('');
    const myChangeHandlerName = (e) => setMyInputName(e.target.value);

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
        setSelectedGenre(e.target.value);
    }

    const filteredBooks = books.filter(x => {
        return (
            x.price > myInputPriceMin &&
            x.price < myInputPriceMax &&
            (x.bookName.includes(myInputName) || myInputName === '') &&
            (Number(selectedGenre) === 0 || x.genre.indexOf(Number(selectedGenre)) !== -1)
        )
    });

    return (
        <div className='books-page-main'>
            <BooksPagePreText/>
            <div className='books-page-filters'>
                <label>Я шукаю:</label>
                <input className=''
                    type='input'
                    value={myInputName}
                    onChange={myChangeHandlerName}/>

                <label>Ціна:</label>
                <input
                    type='number'
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
            </div>
            <div className='books-page-list'>
                {
                    filteredBooks.map((book, index) => { 
                        return (
                            <BookPreview
                                item={book}
                                showAuthorName={true}
                                stars={[1, 2, 3, 4, 5]}
                                key={`book_${index}`}
                                genres={genres}
                                authors={authors}/>
                        )
                    })
                }
            </div>
        </div>
    );
}

export default BookPage;
