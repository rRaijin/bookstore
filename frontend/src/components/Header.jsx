import React from 'react';
import { Link } from 'react-router-dom';


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


const Header = () => {
    return (
        <div className='flex'>
            <ul className='main-navigation'>
                {
                    menuItems.map((el, i) => {
                        return (
                            <li key={`nav-el-${i}`} className='text-blue'>
                                <Link to={el.src}>
                                    {el.name}
                                </Link>
                            </li>
                        )
                    })
                }
            </ul>
        </div> 
    );
};

export default Header;
