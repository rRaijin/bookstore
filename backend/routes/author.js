import express from 'express';

import Author from '../models/author.js';
import { saveFile } from './files.js';



const jsonParser = express.json();
const router = new express.Router();

router.get('/', async (req, res, next) => {
    let items;
    try {
        items = await Author.find().populate({
            path: 'userId'
        });
    } catch (error) {
        console.log('Error: ', error);
    }
    if (!items) {
        return res.status(404).json({message: 'No items'});
    }
    return res.status(200).json({items});
});

router.put('/', jsonParser, async (req, res) => {
    try {
        console.log('form body: ', req.body);
        const { _id, firstName, lastName, bio, imageFolder, picture } = req.body;

        let author;
        if (_id) {
            author = await Author.findById(_id);
            if (!author) {
                return res.status(404).json({ error: 'Автор не находится' });
            }
            author.firstName = firstName;
            author.lastName = lastName;
            author.bio = bio;
            if (picture) {
                author.picture = picture;
            }
        } else {
            author = new Author({
                firstName,
                lastName,
                bio,
                picture,
            });
        }

        await author.save();
        console.log('Author saved: ', author);

        if (imageFolder) {
            await saveFile(imageFolder, author._id.toString());
        }

        return res.status(200).json({ message: 'OK', item: author });
    } catch (error) {
        // console.error('Error in PUT /api/authors:', error);
    }
});


export default router;

