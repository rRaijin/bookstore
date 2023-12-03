import express from 'express';

import Book from '../models/book.js';
import User from '../models/user.js';


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
    // '6550bdc797369edcb3740601'
    const { bookName, description, year, authorId, price, pages, picture, genresIdsList } = req.body;
    const author = await User.findById(authorId);
    const book = new Book({
        bookName,
        description,
        year,
        price,
        pages,
        picture,
        authorId: author._id,
        genre: genresIdsList
    });
    await book.save();
    res.status(200).json({message: 'OK', item: book});
});

export default router;
