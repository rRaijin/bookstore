import express from 'express';
import { saveFile } from './files.js';
import Newspaper from '../models/newspaper.js';



const jsonParser = express.json();
const router = new express.Router();

router.get('/', (req, res) => {
    console.log('DEBUG SERVER: ', req.query);
    return Newspaper.find().then((items) => {
        console.log('items: ', items);
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
    const { newspaperName, description, year, picture, imageFolder, publisher } = req.body;
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
        } else {
            // error
        }
    } else {
        newspaper = new Newspaper({
            newspaperName,
            description,
            year,
            // picture,
            publisher
        });
    }
    console.log('newspaper: ', newspaper)
    // await saveFile(picture, imageFolder);
    await newspaper.save();
    return res.status(200).json({message: 'OK', item: newspaper});
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
