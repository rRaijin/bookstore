import express from 'express';
import { saveFile } from './files.js';
import Publisher from '../models/publisher.js';

const jsonParser = express.json();
const router = new express.Router();

router.get('/', (req, res) => {
    console.log('DEBUG SERVER: ', req.query);
    return Publisher.find().then((items) => {
        // console.log('items: ', items);
        if (items.length === 0) {
            return res.status(200).json({message: 'Издатель не найден', items});
        } else {
            return res.status(200).json({items});
        }
    }).catch((err) => {
        return res.json({message: 'Ошибка при получении Издателя'});
    });
});

router.put('/', jsonParser, async (req, res) => {
    console.log('form body: ', req.body);
    const { publisherName, description, year, editorInChief, picture, imageFolder } = req.body;
    let publisher;
    if (req.body._id) {
        publisher = await Publisher.findById(req.body._id);
        if (publisher) {
            publisher.publisherName = publisherName;
            publisher.description = description;
            publisher.year = year;
            // newspaper.picture = picture;
            publisher.editorInChief = editorInChief;
        } else {
            // error
        }
    } else {
        publisher = new Publisher({
            publisherName,
            description,
            year,
            // picture,
            editorInChief
        });
    }
    console.log('publisher: ', publisher)
    // await saveFile(picture, imageFolder);
    await publisher.save();
    return res.status(200).json({message: 'OK', item: publisher});
});


export default router;