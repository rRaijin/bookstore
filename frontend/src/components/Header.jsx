import { useContext } from 'react';
import { Link } from 'react-router-dom';

import { MyContext } from '../MyContext';


const menuItems = [
    {
        name: 'home',
        src: '/',
        icon: ''
    },
    {
        name: 'Новинки',
        src: '/books',
        icon: ''
    },
    {
        name: 'Автори',
        src: '/authors',
        icon: ''
    },
    {
        name: 'Видавництва',
        src: '/publishings',
        icon: ''
    },
    {
        name: 'ТОП',
        src: '/top',
        icon: ''
    },
    {
        name: 'Акції',
        src: '/shares',
        icon: ''
    },
    {
        name: 'Книги',
        src: '/books',
        icon: ''
    },
    {
        name: 'Клуб',
        src: '/club',
        icon: ''
    },
];

const subMenuItems = [
    {
        name: 'books',
        src: '/admin/books',
        icon: ''
    }
];


const Header = () => {
    // Используем контекст
    const { setSkin } = useContext(MyContext);

    return (
        <div className='flex flex-col'>
            <div className='flex'>
                <ul className='main-navigation'>
                    {
                        menuItems.map((el, i) => {
                            return (
                                <li key={`nav-el-${i}`}>
                                    <Link to={el.src}>
                                        {el.name}
                                    </Link>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
            <div className='flex'>
                <ul className='second-navigation'>
                    {
                        subMenuItems.map((el, i) => {
                            return (
                                <li key={`sub-nav-el-${i}`}>
                                    <Link to={el.src}>
                                        {el.name}
                                    </Link>
                                </li>
                            )
                        })
                    }
                </ul>
                <ul className='context-controls'>
                    <li className='' onClick={() => setSkin('default')}>
                        default
                    </li>
                    <li className='' onClick={() => setSkin('black')}>
                        black
                    </li>
                </ul>
            </div>
        </div> 
    );
};

export default Header;
