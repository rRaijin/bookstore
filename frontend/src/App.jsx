import './App.css';
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


const App = () => {
    const defaultContextValues = useContext(MyContext);
    const [text, setText] = useState(defaultContextValues.text);
    const [skin, setSkin] = useState(defaultContextValues.skin);

    const saveSkin = (value) => {
        setSkin(value);
        localStorage.setItem('skin', value);
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
                    </Route>
                </Routes>
                {/* <Footer/> */}
            </MyContext.Provider>
        </div>
    );
}

export default App;
