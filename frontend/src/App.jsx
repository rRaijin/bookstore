import './App.css';

import { library } from '@fortawesome/fontawesome-svg-core'
import { 
    faCoffee, faCheckSquare, faMagnifyingGlassPlus, faClock
} from '@fortawesome/free-solid-svg-icons';


import { Routes, Route } from 'react-router-dom';
import { useState, useContext } from 'react';

import { MyContext } from './MyContext';
import AdminBooks from './pages/admin/books';
import AuthorsList from './pages/authors/list';
import AuthorDetail from './pages/authors/item';
import BooksList from './pages/books/list';
import BookDetail from './pages/books/item';
import Header from './components/Header';
import HomePage from './pages/home';
import Layout from './components/Layout';
import Publishings from './pages/publishings';
import AdminAuthors from './pages/admin/authors';
import AdminNewspapper from './pages/admin/newspapers';


const App = () => {
    library.add(faCheckSquare, faCoffee, faMagnifyingGlassPlus, faClock);

    const defaultContextValues = useContext(MyContext);
    const [text, setText] = useState(defaultContextValues.text);
    const [skin, setSkin] = useState(defaultContextValues.skin);

    const saveSkin = (value) => {
        setSkin(value);
        localStorage.setItem('skin', value);
        // localStorage.removeItem('skin');
    };

    const x = 42;

    return (
        <div className={`container skin-${skin}`}>
            <MyContext.Provider value={{text, setText, skin, setSkin: saveSkin, x}}>
                <Header/>
                <Routes>
                    <Route path='/' element={<Layout/>}>
                        <Route index element={<HomePage/>}/>
                        <Route path='books' element={<BooksList/>}/>
                        <Route path='book/:id' element={<BookDetail/>}/>
                        <Route path='authors' element={<AuthorsList/>}/>
                        <Route path='author/:id' element={<AuthorDetail/>}/>
                        <Route path='admin/books' element={<AdminBooks/>}/>
                        <Route path='admin/authors' element={<AdminAuthors/>}/>
                        <Route path='admin/newspaper' element={<AdminNewspapper/>}/>
                        <Route path='publishings' element={<Publishings/>}/>
                    </Route>
                </Routes>
                {/* <Footer/> */}
            </MyContext.Provider>
        </div>
    );
}

export default App;
