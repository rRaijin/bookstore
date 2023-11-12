import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './index.css';
import './styles/home.css';
import './styles/books.css';
import './styles/authors.css';
import './styles/slider.css';
import './styles/genres.css'
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path='/*' element={<App/>}/>
            </Routes>
        </BrowserRouter>
    </React.StrictMode>
);
