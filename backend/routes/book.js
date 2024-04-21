import express from 'express';

import { saveFile } from './files.js';
import Book from '../models/book.js';
import Author from '../models/author.js';


// function express1() {
//     function json() {
//         return ''
//     }

//     class Router {

//     }

//     return 42;
// }

function y() {
    const a = 1;
    const b = 54;

    function g() {
        const jj = 54;
        // *****
        return {
            pp: jj,
            fgh: () => {
                
            }
        };
    }
    return {
        x: a * 2,
        myMethod: g
    }
}

const y2 = {
    a: 1,
    json: function () {
        return '43';
    },
    Router: class asd {
        static gg = 43;
        get() {
            return gg + 67
        }
    }
}

console.log('y: ', y().myMethod());

const x = express();
console.log('x: ', y2.json(), new y2.Router());

const jsonParser = express.json();
const router = new express.Router();

router.get('/test', (req, res) => {
    console.log('SERVER FETCH!!!!');
    return res.status(200).json({
        x: 34,
        y: 21
    });
});

router.get('/books', (req, res) => {
    const numbers = [1, 2, 3, 4, 5];
    res.status(200).json({ numbers });
});

router.get('/authors', async (req, res) => {
    let authors;
    try {
        authors = await Author.find();
    } catch (error) {
        console.log('Error: ', error);
        return res.status(500).json({ message: 'Error fetching authors' });
    }
    res.status(200).json({ authors });
});

router.get('/', async (req, res, next) => {
    let items;
    try {
        // items = await Book.find().populate('authorId').populate('genres');
        items = await Book.find().populate({
            path: 'authorId',
            populate: {
                path: 'userId',
                model: 'User'
            }
        }).populate('genres');

    } catch (error) {
        console.log('Error: ', error);
        return res.status(404).json({message: 'ERROR'});
    }
    if (!items) {
        return res.status(404).json({message: 'No items'});
    }
    return res.status(200).json({items});
});

router.put('/', jsonParser, async (req, res) => {
    console.log('form body: ', req.body);
    const { bookName, description, year, authorId, price, pages, picture, imageFolder, genresIdsList } = req.body;
    const author = await Author.findById(authorId._id);
    // Определяем нужно создать новую книгу или обновить существующую
    // Для существующей в body прийдет поле "_id"
    let book;
    if (req.body._id) {
        book = await Book.findById(req.body._id);
        if (book) {
            book.bookName = bookName;
            book.description = description;
            book.year = year;
            book.price = price;
            book.pages = pages;
            book.picture = picture;
        } else {
            // error
        }
    } else {
        book = new Book({
            bookName,
            description,
            year,
            price,
            pages,
            picture,
            authorId: author._id,
            genre: genresIdsList
        });
    }
    saveFile(picture, imageFolder);
    await book.save();
    res.status(200).json({message: 'OK', item: book});
});

export default router;
