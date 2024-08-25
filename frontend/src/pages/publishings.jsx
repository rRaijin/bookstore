import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faInstagram, faSquareYoutube, faFacebookF, faTelegram, faTiktok } from '@fortawesome/free-brands-svg-icons';

const Publishings = () => {
    // HW
    // 1. copy page https://book-ye.com.ua/contacts/ без навигации
    const [isPanelVisible, setIsPanelVisible] = useState(false);
    const [selectedItemId, setSelectedItemId] = useState(null);
    const [activeButton, setActiveButton] = useState('button1');

    const togglePanel = () => {
        setIsPanelVisible(!isPanelVisible);
    };

    const handleMouseEnter = (id) => {
        setSelectedItemId(id);
    };

    const activeClick = (button) => {
        setActiveButton(button);
    };

    const items = [
        {
            id: 1,
            name: 'Дитяча Література',
            name1: 'Дитяча нехудожня література',
            description: 'Для наймолодших',
            description1: 'Абетки',
            description2: 'Дитячі розмальовки',
            description3: 'Читанки',
            description4: 'Дитячі енциклопедії',
            description5: 'Підготовка до школи',
            description6: 'Розвивальні книжки',
            description7: 'Шкільні підручники та посібники',
            description8: 'Головоломки та кросворди для дітей',
            description9: 'Біографії відомих людей для дітей',
            description10: 'Дорослішання',
            description11: 'Етикет для дітей',
            description12: 'Ілюстровані мандрівки',
            description13: 'Програмування для дітей',
            description14: 'Фінансова грамотність для дітей',
            description15: 'Прописи',
        },
        {
            id: 2,
            name: 'Художня література',
            name1: ' Детективи',
            description: 'Англійський детектив',
            description1: 'Містичний детектив',
            description2: 'Історичний детектив',
            description3: 'Шпигунський детектив',
            description3: 'Скандинавський детектив'
        },
        {
            id: 3,
            name: 'Нехудожня література',
            name1: 'Суспільні науки',
            description: 'Соціологія',
            description1: 'Народознавство',
            description2: 'Політологія'
        }
    ];

    const renderDetails = () => {
        const selectedItem = items.find(item => item.id === selectedItemId);

        if (!selectedItem) {
            return (
                <section>
                    Наведіть на товар для перегляду інформації
                </section>
            )
        }

        return (
            <section className="item-details">
                <h4 className="marg-0">{selectedItem.name1}</h4>
                <div className="font-for-descrip">{selectedItem.description}</div>
                <div className="font-for-descrip">{selectedItem.description1}</div>
                <div className="font-for-descrip">{selectedItem.description2}</div>
                <div className="font-for-descrip">{selectedItem.description3}</div>
                <div className="font-for-descrip">{selectedItem.description4}</div>
                <div className="font-for-descrip">{selectedItem.description5}</div>
                <div className="font-for-descrip">{selectedItem.description6}</div>
                <div className="font-for-descrip">{selectedItem.description7}</div>
                <div className="font-for-descrip">{selectedItem.description8}</div>
                <div className="font-for-descrip">{selectedItem.description9}</div>
                <div className="font-for-descrip">{selectedItem.description10}</div>
                <div className="font-for-descrip">{selectedItem.description11}</div>
                <div className="font-for-descrip">{selectedItem.description12}</div>
                <div className="font-for-descrip">{selectedItem.description13}</div>
                <div className="font-for-descrip">{selectedItem.description14}</div>
                <div className="font-for-descrip">{selectedItem.description15}</div>
            </section>
        );
    };

    return (
        <div className="">
            {/* <FontAwesomeIcon
                icon={"coffee"}
                size={'xs'}
            /> */}
            {/* <FontAwesomeIcon icon={faMagnifyingGlassPlus} /> */}
            {/* <FontAwesomeIcon icon="fa-solid fa-magnifying-glass-plus" /> */}
            <div className='mr-t-1p mr-b-1p flex'>
                <div className=''>
                    <div className='litery-ye'>
                        <span className='mr-5px '>
                            Є 
                        </span>
                    </div>
                    
                    <span className='book-shop-styles'>
                        КНИГАРНЯ
                    </span>
                </div>
                
                <div className='mr-l-15p  w-40p box-shadow-dark-grey flex border-r-5px'>
                    <div className='diagonal-background border-r-5px-no-r-b '>
                        <div>
                            КЕШБЕК ДО 35%
                        </div>
                        <div className='font-14px black'>
                            додатково до знижок
                        </div>
                        <a className='red-dark font-14px underline' href="">
                            Подивитись
                        </a>
                    </div>
                    <div className='black cashback'>
                        <span className='bold white padd-t-l-14px font-15px'>
                            КЕШБЕК ДО
                        </span>
                        <span className='bold white cashback-35'>
                            35
                        </span>
                    </div>
                </div>
                <div className='black mr-l-15p'>
                    <h3 className='weight-normal'>
                        Інтернет-магазин
                    </h3>
                    <h3 className='weight-normal'>
                        (0800) 33-05-65
                    </h3>
                    <h3 className='weight-normal'>
                        (044) 333-42-20
                    </h3>
                </div>
            </div>
            

            <header className="header-background flex">
                <div className="header-button cursor">
                    <div>
                        <div className="header__catalog-btn" onClick={togglePanel}>
                            Каталог Товарів
                            <span className="font-size-10px padd-left-10px">▼</span>
                        </div>
                    </div>
                </div>
                <div className="w-55p">
                    <form className="just-center mr-top-3-5 flex form-with-padd" action="/search">
                        <input className="header__search-field" type="text" name="" id="" />
                        <span className="back-white icon">
                            <div className="search-icon"></div>
                        </span>
                    </form>
                </div>
                <div>
                    <a href=""></a>
                    <a href=""></a>
                    <a href=""></a>
                </div>
            </header>
            <div className={`control-panel ${isPanelVisible ? 'panel-visible' : 'panel-hidden'}`}>
                <div className="panel-left">
                    <div className="Scroll">
                        <ul className="panel-left__list">
                            {items.map(item => (
                                <li className="text-centre flex w-100p" key={item.id}>
                                    <a
                                        className={`panel-left__link ${selectedItemId === item.id ? 'selected' : ''}`}
                                        href="#"
                                        onMouseEnter={() => handleMouseEnter(item.id)}
                                    >
                                        {item.name}
                                    </a>
                                    
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
                <div className="panel-right">
                    {renderDetails()}
                </div>
            </div>
            <div className="back-white-dark black">
                <div className="pd-t-2p">
                    <a href="" className="black ">
                        <span>
                            Книгарня "Є"
                        </span>
                        /
                        <span className="bold ml-5px">
                            Книгарні
                        </span>
                    </a>
                </div>
                <div className="pd-t-2p">
                    <span className="bold">
                        Працюють усі наші офлайн-магазини, за винятком Слов'янська.
                    </span>
                </div>
                <div className="pd-t-2p">
                    <h2 className="font-weight-400">
                        Мережа книгарень
                    </h2>
                    <div>
                        <ul className="padd-0">
                            <li className="cities-item">
                                <a
                                    className={activeButton === 'button1' ? 'all-cities' : 'underline black'}
                                    onClick={() => activeClick('button1')}
                                    href="#"
                                >
                                    Всі міста
                                </a>
                            </li>
                            <li className="cities-item">
                                <a
                                    className={activeButton === 'button2' ? 'all-cities' : 'underline black'}
                                    onClick={() => activeClick('button2')}
                                    href="#"
                                >
                                    Київ
                                </a>
                            </li>
                            <li className="cities-item">
                                <a
                                    className={activeButton === 'button3' ? 'all-cities' : 'underline black'}
                                    onClick={() => activeClick('button3')}
                                    href="#"
                                >
                                    Харків
                                </a>
                            </li>
                            <li className="cities-item">
                                <a
                                    className={activeButton === 'button4' ? 'all-cities' : 'underline black'}
                                    onClick={() => activeClick('button4')}
                                    href="#"
                                >
                                    Львів
                                </a>
                            </li>
                            <li className="cities-item">
                                <a
                                    className={activeButton === 'button5' ? 'all-cities' : 'underline black'}
                                    onClick={() => activeClick('button5')}
                                    href="#"
                                >
                                    Івано-Франківськ
                                </a>
                            </li>
                            <li className="cities-item">
                                <a
                                    className={activeButton === 'button6' ? 'all-cities' : 'underline black'}
                                    onClick={() => activeClick('button6')}
                                    href="#"
                                >
                                    Біла Церква
                                </a>
                            </li>
                            <li className="cities-item">
                                <a
                                    className={activeButton === 'button7' ? 'all-cities' : 'underline black'}
                                    onClick={() => activeClick('button7')}
                                    href="#"
                                >
                                    Вишгород
                                </a>
                            </li>
                            <li className="cities-item">
                                <a
                                    className={activeButton === 'button8' ? 'all-cities' : 'underline black'}
                                    onClick={() => activeClick('button8')}
                                    href="#"
                                >
                                    Вінниця
                                </a>
                            </li>
                            <li className="cities-item">
                                <a
                                    className={activeButton === 'button9' ? 'all-cities' : 'underline black'}
                                    onClick={() => activeClick('button9')}
                                    href="#"
                                >
                                    Житомир
                                </a>
                            </li>
                            <li className="cities-item">
                                <a
                                    className={activeButton === 'button10' ? 'all-cities' : 'underline black'}
                                    onClick={() => activeClick('button10')}
                                    href="#"
                                >
                                    Калуш
                                </a>
                            </li>
                            <li className="cities-item">
                                <a
                                    className={activeButton === 'button11' ? 'all-cities' : 'underline black'}
                                    onClick={() => activeClick('button11')}
                                    href="#"
                                >
                                    Мукачево
                                </a>
                            </li>
                            <li className="cities-item">
                                <a
                                    className={activeButton === 'button12' ? 'all-cities' : 'underline black'}
                                    onClick={() => activeClick('button12')}
                                    href="#"
                                >
                                    Одеса
                                </a>
                            </li>
                            <li className="cities-item">
                                <a
                                    className={activeButton === 'button13' ? 'all-cities' : 'underline black'}
                                    onClick={() => activeClick('button13')}
                                    href="#"
                                >
                                    Полтава
                                </a>
                            </li>
                            <li className="cities-item">
                                <a
                                    className={activeButton === 'button14' ? 'all-cities' : 'underline black'}
                                    onClick={() => activeClick('button14')}
                                    href="#"
                                >
                                    Ужгород
                                </a>
                            </li>
                            <li className="cities-item">
                                <a
                                    className={activeButton === 'button15' ? 'all-cities' : 'underline black'}
                                    onClick={() => activeClick('button15')}
                                    href="#"
                                >
                                    Черкаси
                                </a>
                            </li>
                            <li className="cities-item">
                                <a
                                    className={activeButton === 'button16' ? 'all-cities' : 'underline black'}
                                    onClick={() => activeClick('button16')}
                                    href="#"
                                >
                                    Чернівці
                                </a>
                            </li>
                            <li className="cities-item">
                                <a
                                    className={activeButton === 'button17' ? 'all-cities' : 'underline black'}
                                    onClick={() => activeClick('button17')}
                                    href="#"
                                >
                                    Дніпро
                                </a>
                            </li>
                            <li className="cities-item">
                                <a
                                    className={activeButton === 'button18' ? 'all-cities' : 'underline black'}
                                    onClick={() => activeClick('button18')}
                                    href="#"
                                >
                                    Тернопіль
                                </a>
                            </li>
                            <li className="cities-item">
                                <a
                                    className={activeButton === 'button19' ? 'all-cities' : 'underline black'}
                                    onClick={() => activeClick('button19')}
                                    href="#"
                                >
                                    Володимир
                                </a>
                            </li>
                            <li className="cities-item">
                                <a
                                    className={activeButton === 'button20' ? 'all-cities' : 'underline black'}
                                    onClick={() => activeClick('button20')}
                                    href="#"
                                >
                                    Рівне
                                </a>
                            </li>
                            <li className="cities-item">
                                <a
                                    className={activeButton === 'button21' ? 'all-cities' : 'underline black'}
                                    onClick={() => activeClick('button21')}
                                    href="#"
                                >
                                    Луцьк
                                </a>
                            </li>
                            <li className="cities-item">
                                <a
                                    className={activeButton === 'button22' ? 'all-cities' : 'underline black'}
                                    onClick={() => activeClick('button22')}
                                    href="#"
                                >
                                    Хмельницький
                                </a>
                            </li>
                            <li className="cities-item">
                                <a
                                    className={activeButton === 'button23' ? 'all-cities' : 'underline black'}
                                    onClick={() => activeClick('button23')}
                                    href="#"
                                >
                                    Суми
                                </a>
                            </li>
                            <li className="cities-item">
                                <a
                                    className={activeButton === 'button24' ? 'all-cities' : 'underline black'}
                                    onClick={() => activeClick('button24')}
                                    href="#"
                                >
                                    Запоріжжя
                                </a>
                            </li>
                            <li className="cities-item">
                                <a
                                    className={activeButton === 'button25' ? 'all-cities' : 'underline black'}
                                    onClick={() => activeClick('button25')}
                                    href="#"
                                >
                                    Слов'янськ
                                </a>
                            </li>
                            <li className="cities-item">
                                <a
                                    className={activeButton === 'button26' ? 'all-cities' : 'underline black'}
                                    onClick={() => activeClick('button26')}
                                    href="#"
                                >
                                    Кропивницький
                                </a>
                            </li>
                            <li className="cities-item">
                                <a
                                    className={activeButton === 'button27' ? 'all-cities' : 'underline black'}
                                    onClick={() => activeClick('button27')}
                                    href="#"
                                >
                                    Чернігів
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <div className="bold">
                            Інтернет-магазин
                        </div>
                        <div>
                            support@book-ye.com
                        </div>
                        <div>
                            0800 33 05 65
                        </div>
                        <div>
                            044 333 42 20
                        </div>
                        <div className='font-monospace dark-grey'>
                            <FontAwesomeIcon icon={faClock} />
                            Графік роботи з 9.00 до 21.00 без вихідних
                        </div>
                    </div>
                    <div className='street flex'>
                        <div className='w-60p '>
                            <h3 className='weight-normal'>
                                Київ, вул. Лисенка, 3
                            </h3>
                            <div className='dark-grey'>
                                <FontAwesomeIcon className='padd-r-10px' icon={faPhone} />
                                (063)-373-94-76 (044) 235-88-50  
                                <FontAwesomeIcon className='padd-l-10px padd-r-10px' icon={faClock} />
                                графік: з 9:00 до 21:00, без вихідних
                            </div>
                        </div>
                        <div>
                            <img className='padd-for-img-street' src="https://lh3.googleusercontent.com/p/AF1QipMsT71TSFmBo0JvZWRe5lbAVpTaT6uMlhYZI1Wh=s156-w156-h108-n-k-no" alt="ffdd" />
                        </div>
                    </div>
                    <div className='street flex'>
                        <div className='w-60p '>
                            <h3 className='weight-normal'>
                                Київ, провулок Політехнічний, 1/33
                            </h3>
                            <div className='dark-grey'>
                                <FontAwesomeIcon className='padd-r-10px' icon={faPhone} />
                                (063)-374-00-48
                                <FontAwesomeIcon className='padd-l-10px padd-r-10px' icon={faClock} />
                                графік: з 9:00 до 21:00, без вихідних
                            </div>
                        </div>
                        <div>
                            <img className='padd-for-img-street' src="https://lh3.googleusercontent.com/p/AF1QipMsT71TSFmBo0JvZWRe5lbAVpTaT6uMlhYZI1Wh=s156-w156-h108-n-k-no" alt="ffdd" />
                        </div>
                    </div>
                    <div className='street flex'>
                        <div className='w-60p '>
                            <h3 className='weight-normal'>
                                Київ, вул. Спаська, 5
                            </h3>
                            <div className='dark-grey'>
                                <FontAwesomeIcon className='padd-r-10px' icon={faPhone} />
                                (063)-373-94-80 (044) 351-13-38
                                <FontAwesomeIcon className='padd-l-10px padd-r-10px' icon={faClock} />
                                графік: з 9:00 до 21:00, без вихідних
                            </div>
                        </div>
                        <div>
                            <img className='padd-for-img-street' src="https://lh3.googleusercontent.com/p/AF1QipMsT71TSFmBo0JvZWRe5lbAVpTaT6uMlhYZI1Wh=s156-w156-h108-n-k-no" alt="ffdd" />
                        </div>
                    </div>
                    <div className='street flex brd-b-1px-grey'>
                        <div className='w-60p '>
                            <h3 className='weight-normal'>
                                Київ, вул. Освіти, 2
                            </h3>
                            <div className='dark-grey'>
                                <FontAwesomeIcon className='padd-r-10px' icon={faPhone} />
                                (063)-373-95-31
                                <FontAwesomeIcon className='padd-l-10px padd-r-10px' icon={faClock} />
                                графік: з 9:00 до 21:00, без вихідних
                            </div>
                        </div>
                        <div>
                            <img className='padd-for-img-street' src="https://lh3.googleusercontent.com/p/AF1QipMsT71TSFmBo0JvZWRe5lbAVpTaT6uMlhYZI1Wh=s156-w156-h108-n-k-no" alt="ffdd" />
                        </div>
                    </div>
                </div>
            </div>
            <footer className='back-black flex'>
                <div className='w-75p flex'>
                    <ul className='footer-nav w-33p'>
                        <li className='foot-list'>
                            <a className='foot-nav-link' href="">
                                Про нас
                            </a>
                        </li>
                        <li className='foot-list'>
                            <a className='foot-nav-link' href="">
                                Умови використання сайту
                            </a>
                        </li>
                        <li className='foot-list'>
                            <a className='foot-nav-link' href="">
                                Публічний договір (оферта)
                            </a>
                        </li>
                        <li className='foot-list'>
                            <a className='foot-nav-link' href="">
                                Складнощі із замовленням
                            </a>
                        </li>
                        <li className='foot-list'>
                            <a className='foot-nav-link' href="">
                                Контакти
                            </a>
                        </li>
                        <li className='foot-list'>
                            <a className='foot-nav-link' href="">
                                Читацький клуб
                            </a>
                        </li>
                        
                    </ul>
                    <ul className='footer-nav w-33p'>
                        <li className='foot-list'>
                            <a className='foot-nav-link' href="">
                                Книгарні
                            </a>
                        </li>
                        <li className='foot-list'>
                            <a className='foot-nav-link' href="">
                                Доставка і оплата
                            </a>
                        </li>
                        <li className='foot-list'>
                            <a className='foot-nav-link' href="">
                                Повернення товару
                            </a>
                        </li>
                        <li className='foot-list'>
                            <a className='foot-nav-link' href="">
                                Програма лояльності
                            </a>
                        </li>
                        <li className='foot-list'>
                            <a className='foot-nav-link' href="">
                                Карта сайту
                            </a>
                        </li>
                    </ul>
                    <ul className='footer-nav w-33p'>
                        <li className='foot-list'>
                            <a className='foot-nav-link' href="">
                                Календар подій
                            </a>
                        </li>
                        <li className='foot-list'>
                            <a className='foot-nav-link' href="">
                                Партнери
                            </a>
                        </li>
                        <li className='foot-list'>
                            <a className='foot-nav-link' href="">
                                Зворотний зв'язок
                            </a>
                        </li>
                        <li className='foot-list'>
                            <a className='foot-nav-link' href="">
                                Проєкти
                            </a>
                        </li>
                        <li className='foot-list'>
                            <a className='foot-nav-link' href="">
                                Клуб любителів книжки
                            </a>
                        </li>
                    </ul>
                </div>
                <div className='w-25p white'>
                    <div className='padd-t-10px font-19px mr-b-10px'>
                        Ми у соц.мережах
                    </div>
                    <div className='flex'>
                        <div>
                            <FontAwesomeIcon
                                className='icons-social-networks back-grey cursor'
                                icon={faSquareYoutube} 
                                size={'xl'}
                                style={{color: "#000000",}}
                            />
                        </div>
                        <div className='padd-l-10px'>
                            <FontAwesomeIcon 
                                className='facebook back-grey cursor'
                                icon={faFacebookF} 
                                size={'xl'}
                                style={{color: "#000000",}}/>
                        </div>
                            <div className='padd-l-10px'>
                                <FontAwesomeIcon 
                                    className='icons-social-networks back-grey cursor'
                                    icon={faTelegram} 
                                    size={'xl'}
                                    style={{color: "#000000",}}/>
                            </div>
                        <div className='padd-l-10px'>
                            <FontAwesomeIcon 
                                className='icons-social-networks back-grey cursor'
                                icon={faInstagram} 
                                size={'xl'}
                                style={{color: "#000000",}}
                            />
                        </div>
                        <div className='padd-l-10px'>
                            <FontAwesomeIcon 
                                className='icons-social-networks back-grey cursor'
                                icon={faTiktok} 
                                size={'xl'}
                                style={{color: "#000000",}}
                            />
                        </div>
                    </div>  
                </div>
            </footer>
        </div>
    );
};

export default Publishings;