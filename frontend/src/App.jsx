import './App.css';
import { Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import HomePage from './pages/home';
import Layout from './components/Layout';
import BookPage from './pages/books';
import BookDetail from './pages/bookDetail';
import AuthorsPage from './pages/authors';
import AuthorDetail from './pages/authorDetail';


const App = () => {
    return (
        <div className='container'>
            <Header/>
            <Routes>
                <Route path='/' element={<Layout/>}>
                    <Route index element={<HomePage/>}/>
                    <Route path='books' element={<BookPage/>}/>
                    <Route path="book/:id" element={<BookDetail/>}/>
                    <Route path='authors' element={<AuthorsPage/>}/>
                    <Route path="author/:id" element={<AuthorDetail/>}/>
                </Route>
            </Routes>
            {/* <Footer/> */}
        </div>
    );
}

export default App;
