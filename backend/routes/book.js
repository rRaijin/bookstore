import express from 'express';

import Book from '../models/book.js';


const jsonParser = express.json();
const router = new express.Router();

router.get('/', async (req, res, next) => {
    let items;
    try {
        items = await Book.find();
    } catch (error) {
        console.log('Error: ', error);
    }
    if (!items) {
        return res.status(404).json({message: 'No items'});
    }
    return res.status(200).json({items});
});

router.put('/', jsonParser, async (req, res, next) => {
    console.log('form body: ', req.body);
    const { bookName, description, year } = req.body;
    const book = new Book({
        bookName: bookName,
        description: description,
        year: year
    });
    await book.save();
    res.status(200).json({message: 'OK', item: book});
});

export default router;
