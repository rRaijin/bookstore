import express from 'express';

import { saveFile } from './files.js';
import EditorInChief from '../models/editorInChief.js';
import User from '../models/user.js';


const jsonParser = express.json();
const router = new express.Router();

router.get('/', async (req, res, next) => {
    let items;
    try {
        items = await EditorInChief.find().populate({
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

        let editorInChief;
        if (_id) {
            editorInChief = await EditorInChief.findById(_id);
            if (!editorInChief) {
                return res.status(404).json({ error: 'Автор не находится' });
            }
            editorInChief.bio = bio;

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
                editorInChief.userId = savedUser._id;
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
            editorInChief = new EditorInChief({
                bio,
                userId: savedUser._id,
                firstName,
                lastName,
                userEmail
            });
        }
        await editorInChief.save();
        return res.status(200).json({ message: 'OK', item: editorInChief });
    } catch (error) {
        console.error('Error in PUT /api/editorInChief:', error);
    } finally {
        console.log('OK!!!')
    }
});


export default router;

