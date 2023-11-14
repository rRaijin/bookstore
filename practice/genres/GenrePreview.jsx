import { Link } from 'react-router-dom';


const GenresPage = (props) => {
    const { item, title, books } = props;

    return (
        <div className='text-black w-35p ml-10px'>
            <p className=' '>
                <img className='' src={`/books/${item.photoGenre}`} alt={item.genre}/>                
            </p>
            
            <Link to={`/genres/${item.id}`}>
                <button>
                    Просмотреть
                </button>
            </Link>
        </div>
    )
}

export default GenresPage;
