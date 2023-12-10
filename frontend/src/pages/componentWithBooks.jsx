import React from 'react';
import { withRouter } from '../hocs/withRouter';
import books from '../mock/books.json';
import genres from '../mock/genres.json';
import authors from '../mock/authors.json';

function getGenreTitles(genreIds) {
    return genreIds.map((genreId) => {
        const genre = genres.find((genre) => genre.id === genreId);
        return genre ? genre.title : 'Unknown Genre';
    });
}

const BookDetail = ({ router }) => {
    const itemId = Number(router.params.id);
    const item = books.find(book => Number(book.id) === itemId);

    if (!item || !item.author) {
        return console.log('Книга не найдена');
    }

    const author = authors.find(author => author.id === item.author);
    const filteredGenres = genres.filter(g => item.genre.indexOf(g.id) !== -1);
    const genreTitles = getGenreTitles(item.genre);

    return (
        <div>
            <div className="with-60p flex">
                <img className='w-50p' src={`/books/${item.picture}`} alt={item.bookName}/>
                <div className='flex-col pl-5p'>
                    <div className='pt-4p text-orange flex'>
                        Назва: 
                        <div className='text-turquoise pl-2p'>
                            {item.bookName}
                        </div>
                    </div>
                    <div className='brd-t-black-1px pt-4p text-orange flex'>
                        Рік: 
                        <div className='text-turquoise pl-2p'>
                            {item.year}
                        </div>
                    </div>
                    <div className='brd-t-black-1px pt-4p text-orange flex'>
                        Автор: 
                        <div className='text-turquoise pl-2p'>
                            {author.firstName} {author.lastName}
                        </div>
                    </div>
                    <div className='brd-t-black-1px pt-4p text-orange flex'>
                        Жанри: 
                        <div className='text-turquoise pl-2p'>
                            {genreTitles.map((title, index) => (
                                <div key={index}>{title}</div>
                            ))}
                        </div>
                    </div>
                    <div className='brd-t-black-1px pt-4p text-orange flex'>
                        Сторінки: 
                        <div className='text-turquoise pl-2p'>
                            {item.pages}
                        </div>
                    </div>
                    <div className='brd-t-black-1px pt-4p text-orange flex'>
                        Опис: 
                        <div className='text-turquoise pl-2p brd-b-black-2px'>
                            {item.description}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default withRouter(BookDetail);
