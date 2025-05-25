import TopBookList from '../components/home/TopBooksList';
import TopListAuthors from '../components/home/TopListAuthors';


const HomePage = () => {

    return (
        <div className=''>
            <div className=''>
                <h1 className=''>
                    Ставим яркий заголовок - у нас всегда новинки, программы лояльности и тд, картинку, контакты
                    Минимум информации в блоке
                </h1>
            </div>

            <TopBookList/>
            <TopListAuthors/>

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
        </div>
    );
};

export default HomePage;
