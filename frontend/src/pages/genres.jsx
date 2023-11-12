import GenresPage from '../components/genres/GenrePreview';
import genres from '../mock/genres.json';
const GenresPagee = () => {
    return (
        <div>
            <h1>Жанры</h1>
        <ul className='flex-wrap w-full '>
            {genres.map(genre => (
                <li key={genre.id}>
                  
                  <GenresPage
                  item={genre}/>
                </li>
              ))}
        </ul>
        </div>
    );
};

export default GenresPagee;
