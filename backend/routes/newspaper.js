import express from 'express';
import { saveFile } from './files.js';
import Newspaper from '../models/newspaper.js';



const jsonParser = express.json();
const router = new express.Router();

router.get('/', (req, res) => {
    // console.log('DEBUG SERVER: ', req.query);
    return Newspaper.find().then((items) => {
        // console.log('items: ', items);
        if (items.length === 0) {
            return res.status(200).json({message: 'Газеты не найдены', items});
        } else {
            return res.status(200).json({items});
        }
    }).catch((err) => {
        return res.json({message: 'Ошибка при получении газет'});
    });
});

router.put('/', jsonParser, async (req, res) => {
    console.log('form body: ', req.body);
    const { newspaperName, description, year, picture, imageFolder, publisher,editorInChief } = req.body;
    // const author = await Author.findById(authorId._id);
    // Определяем нужно создать новую книгу или обновить существующую
    // Для существующей в body прийдет поле "_id"
    let newspaper;
    if (req.body._id) {
        newspaper = await Newspaper.findById(req.body._id);
        if (newspaper) {
            newspaper.newspaperName = newspaperName;
            newspaper.description = description;
            newspaper.year = year;
            // newspaper.picture = picture;
            newspaper.publisher = publisher;
            newspaper.editorInChief = editorInChief;
        } else {
            // error
        }
    } else {
        newspaper = new Newspaper({
            newspaperName,
            description,
            year,
            // picture,
            publisher,
            editorInChief
        });
    }
    console.log('newspaper: ', newspaper)
    // await saveFile(picture, imageFolder);
    await newspaper.save();
    return res.status(200).json({message: 'OK', item: newspaper});
});
export default router