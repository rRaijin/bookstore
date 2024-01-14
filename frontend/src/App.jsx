import './App.css';
import { Routes, Route } from 'react-router-dom';

import AdminBooks from './pages/admin/books';
import AuthorsList from './pages/authors/list';
import AuthorDetail from './pages/authors/item';
import BooksList from './pages/books/list';
import BookDetail from './pages/books/item';
import Header from './components/Header';
import HomePage from './pages/home';
import Layout from './components/Layout';


const App = () => {
    return (
        <div className='container'>
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
        </div>
    );
}

export default App;
