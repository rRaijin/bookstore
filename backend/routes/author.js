import express from 'express';

import { saveFile } from './files.js';
import Author from '../models/author.js';
import User from '../models/user.js';


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
        const { _id, firstName, lastName, userEmail, bio, userId } = req.body;

        let author;
        if (_id) {
            author = await Author.findById(_id);
            if (!author) {
                return res.status(404).json({ error: 'Автор не находится' });
            }
            author.bio = bio;

            let user;
            if (userId) {
                // update exists
                user = await User.findById(userId);
                if (!user) {
                    return res.status(404).json({ error: 'Все пропало шеф' });
                } else {
                    user.userEmail = userEmail;
                    user.firstName = firstName;
                    user.lastName = lastName;
                    user.save();
                }
            } else {
                // create new user
                user = new User({
                    firstName,
                    lastName,
                    userEmail,
                    password: '12345678',
                    isAuthor: true
                });
                const savedUser = await user.save();
                author.userId = savedUser._id;
            }
        } else {
            const user = new User({
                firstName,
                lastName,
                userEmail,
                password: '12345678',
                isAuthor: true
            });
            const savedUser = await user.save();
            author = new Author({
                bio,
                userId: savedUser._id
            });
        }
        await author.save();
        return res.status(200).json({ message: 'OK', item: author });
    } catch (error) {
        console.error('Error in PUT /api/authors:', error);
    } finally {
        console.log('OK!!!')
    }
});


export default router;

