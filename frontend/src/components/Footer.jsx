import { faInstagram, faSquareYoutube, faFacebookF, faTelegram, faTiktok } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const Footer = () => {

    return (
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
    )
}

export default Footer;
