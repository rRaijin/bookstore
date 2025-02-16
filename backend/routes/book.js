import express from 'express';

import { saveFile } from './files.js';
import Book from '../models/book.js';
import Author from '../models/author.js';

const jsonParser = express.json();
const router = new express.Router();


router.post('/', async (req, res, next) => {
    const { pageNum, perPage } = req.body;
    console.log('BODY: ', req.body);
    // return Book.aggregate([
    //     {
    //         $match: {}
    //     },
    //     {

    //     }
    // ])
    let items;
    const countItems = await Book.estimatedDocumentCount();
    try {
        items = await Book.find({}).populate({
            path: 'authorId',
            populate: {
                path: 'userId',
                model: 'User'
            }
        }).populate('genres').skip((pageNum - 1) * perPage).limit(perPage);
    } catch (error) {
        console.log('Error: ', error);
        return res.status(404).json({message: 'ERROR'});
    }
    if (!items) {
        return res.status(404).json({message: 'No items'});
    }
    return res.status(200).json({items, countItems});
});

router.delete('/books', (req, res) => {
    console.log('DELETE: ', req.query, 'BOIDY: ', req.body);
    const numbers = [1, 2, 3, 4, 5];
    return res.status(200).json({ numbers });
});

router.get('/testSend', (req, res) => {
    console.log('X: ', req.query.x);
    const { x } = req.query;
    const y = x ? Number(x) * 4 : 42;
    return res.json({msg: `Значение получено, обработано и результат равен: ${y}`})
});

router.get('/authors', async (req, res) => {
    let authors;
    try {
        authors = await Author.find();
    } catch (error) {
        console.log('Error: ', error);
        return res.status(500).json({ message: 'Error fetching authors' });
    }
    return res.status(200).json({ authors });
});



router.put('/', jsonParser, async (req, res) => {
    console.log('form body: ', req.body);
    const { bookName, description, year, authorId, price, pages, picture, imageFolder, genres } = req.body;
    // const author = await Author.findById(authorId._id);
    // Определяем нужно создать новую книгу или обновить существующую
    // Для существующей в body прийдет поле "_id"
    let book;
    if (req.body._id) {
        book = await Book.findById(req.body._id);
        if (book) {
            book.bookName = bookName;
            book.description = description;
            book.authorId = authorId;
            book.year = year;
            book.price = price;
            book.pages = pages;
            book.picture = picture;
            book.genres = genres;
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
            authorId,
            genres
        });
    }
    console.log('BOOK: ', book)
    // await saveFile(picture, imageFolder);
    await book.save();
    return res.status(200).json({message: 'OK', item: book});
});

router.get('/animalSound', (req, res) => {
    const { type } = req.query;

    let sound;
    switch (type) {
        case 'кот':
            sound = 'мяу';
            break;
        case 'собака':
            sound = 'гав';
            break;
        case 'корова':
            sound = 'муу';
            break;
        case 'коза':
            sound = 'мее';
            break;
        default:
            sound = 'Неизвестное животное';
    }

    res.json({ sound });
});

router.put('/calculate', async (req, res) => {
    const { numbers, x } = req.body;

    console.log('body: ', numbers, x);
    
    if (!numbers || !Array.isArray(numbers) || numbers.length !== 4) {
        return res.status(400).json({ error: 'Неверные входные данные' });
    }

    const sum = numbers.reduce((acc, curr) => {
        if (typeof curr === 'number') {
            return acc + curr;
        } else {
            return acc;
        }
    }, 0);
    const product = numbers.reduce((acc, curr) => typeof curr === 'number' ? acc * curr : acc, 1);

    res.status(200).json({ sum, product });
});

export default router;
