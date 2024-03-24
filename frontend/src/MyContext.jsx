import { createContext } from 'react';

// export const MyContext = createContext('');
export const MyContext = createContext({
    skin: localStorage.getItem('skin'),
    text: ''
});

export const MyAnotherContext = createContext(0);
