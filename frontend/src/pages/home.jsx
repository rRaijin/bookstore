import { faInstagram, faSquareYoutube, faFacebookF, faTelegram, faTiktok } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState, useEffect } from 'react';
import moment from 'moment';

import { fetchData } from '../utils';
import Paginate from '../components/fields/Paginate';
import TopList from '../components/home/TopList';
import MostPopular from '../components/home/MostPopular';


const ITEMS_PER_PAGE = 2;

const HomePage = () => {
    const [books, updateBooks] = useState([]);
    const [selectedPage, setSelectedPage] = useState(1);

    useEffect(() => {
        fetchData('books', 'POST', {pageNum: selectedPage, perPage: ITEMS_PER_PAGE}, updateBooks);
    }, []);

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

            <TopList

            />

            {/* <MostPopular
            
            /> */}

            {/* <Paginate 
                fieldName='Топ1'
                updateData={updateBooks}
                books={books}
            />

            <Paginate 
                fieldName='Топ2'
                updateData={updateBooks}
                books={books}
            /> */}

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

            <footer className='home-footer'>
                <div>
                    <ul>
                        <li>
                            <a href="">Про Нас</a>
                        </li>
                        <li>
                            <a href="">Новинки</a>
                        </li>
                        <li>
                            <a href="">Наша Политика</a>
                        </li>
                        <li>
                            <a href="">Доставка</a>
                        </li>
                        <li>
                            <a href="">Безопасность клиента</a>
                        </li>
                    </ul>
                </div>
                <div>
                <ul>
                    <li>
                        <a href="">Контакты</a>
                    </li>
                    <li>
                        <a href="">Адреса</a>
                    </li>
                    <li>
                        <a href="">Способы оплаты</a>
                    </li>
                    <li>
                        <a href="">Клуб</a>
                    </li>
                    <li>
                        <a href="">Партнеры</a>
                    </li>
                    </ul>
                </div>
                <div>
                    <div>
                        <p>
                            Наши соц.сети
                        </p>
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

export default HomePage;
