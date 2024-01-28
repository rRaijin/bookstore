import express from 'express';

import { saveFile } from './files.js';
import Book from '../models/book.js';
import Author from '../models/author.js';


const jsonParser = express.json();
const router = new express.Router();

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
