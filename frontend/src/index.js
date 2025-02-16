import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import './index.css';
import './styles/home.css';
import './styles/books.css';
import './styles/authors.css';
import './styles/admin.css';
import './styles/select.css';
import './styles/slider.css';
import './tasks.js';
import './styles/publishings.css';
import './styles/chat.css';
import './styles/dialogs.css';
import './styles/paginate.css';

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
