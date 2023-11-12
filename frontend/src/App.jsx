import './App.css';
import { Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import HomePage from './pages/home';
import Layout from './components/Layout';
import AboutUs from './pages/aboutUs';

import BookPage from './pages/books';
import BookDetail from './pages/bookDetail';

import AuthorsPage from './pages/authors';
import AuthorDetail from './pages/authorDetail';

import GenresPage from './pages/genres';
import GenreDetail from './pages/genresDetail';
// import Books from './components/genres/GenrePreview';

const App = () => {
    return (
        <div className='container'>
            <Header/>
            <Routes>
                <Route path='/' element={<Layout/>}>
                    <Route index element={<HomePage/>}/>
                    <Route path='about' element={<AboutUs/>}/>
                    <Route path='books' element={<BookPage/>}/>
                    <Route path="book/:id" element={<BookDetail/>}/>
                    <Route path='authors' element={<AuthorsPage/>}/>
                    <Route path="author/:id" element={<AuthorDetail/>}/>
                    <Route path='genres' element={<GenresPage/>}/>
                    <Route path='genres/:id' element={<GenreDetail/>}/>
                </Route>
            </Routes>

            {/* <Footer/> */}
        </div>
    );
}

export default App;

// slug format:
// Mark Twen, camelcase: markTwen, cebabcase: mark-twen