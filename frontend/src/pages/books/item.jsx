import { Component } from 'react';

import { withRouter } from '../../hocs/withRouter';


class BookDetail extends Component {
    constructor(props) {
        super(props)
        this.state = {
            book: null
        }
    }

    componentDidMount() {
        fetch('http://localhost:3001/api/books', {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        }).then(async (response) => {
            if (response.ok === true);
            const results = await response.json();
            this.setState({book: results.items.find(book => book._id === this.props.router.params.id)});
        });
    }

    render() {
        const { book } = this.state;

        return (
            <div>
                {
                    book && (
                    <div className="with-60p flex">
                        <img className='w-50p' src={`/books/${book.picture}`} alt={book.bookName}/>
                        <div className='flex-col pl-5p'>
                            <div className='pt-4p text-orange flex'>
                                Назва: 
                                <div className='text-turquoise pl-2p'>
                                    {book.bookName}
                                </div>
                            </div>
                            <div className='brd-t-black-1px pt-4p text-orange flex'>
                                Рік: 
                                <div className='text-turquoise pl-2p'>
                                    {book.year}
                                </div>
                            </div>
                            <div className='brd-t-black-1px pt-4p text-orange flex'>
                                Автор: 
                                <div className='text-turquoise pl-2p'>
                                    {book.authorId.userId.firstName} {book.authorId.userId.lastName}
                                </div>
                            </div>
                            <div className='brd-t-black-1px pt-4p text-orange flex'>
                                Жанри: 
                                <div className='text-turquoise pl-2p'>
                                    {book.genres.map((genre, i) => {
                                        return (
                                            <div className=''>
                                                {genre.title}
                                            </div>
                                        )
                                    })}
                                </div>
                            </div>
                            <div className='brd-t-black-1px pt-4p text-orange flex'>
                                Сторінки: 
                                <div className='text-turquoise pl-2p'>
                                    {book.pages}
                                </div>
                            </div>
                            <div className='brd-t-black-1px pt-4p text-orange flex'>
                                Опис: 
                                <div className='text-turquoise pl-2p brd-b-black-2px'>
                                    {book.description}
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div> 
        )
    }
}

export default withRouter(BookDetail);
