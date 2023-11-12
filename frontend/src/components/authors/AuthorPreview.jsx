import { Link } from 'react-router-dom';


const AuthorPreview = (props) => {
    const { item, books } = props;

    return (
        <div className='text-black w-29p'>
            <p className='pl-2p'>
                {item.firstName} {item.lastName} <img className='' src={`/books/${item.authorsPhoto}`} alt={item.bookName}/>
            </p>
            <Link to={`/author/${item.id}`}>
                <button>
                    Просмотреть книги
                </button>
            </Link>
        </div>
    )
}

export default AuthorPreview;
