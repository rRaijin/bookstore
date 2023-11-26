import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';

import routerUser from './routes/user.js';
import routerBook from './routes/book.js';


const app = express();
app.use(cors());
// app.use(express.static(__dirname + '/public'));
app.use('/api/users', routerUser);
app.use('/api/books', routerBook);


const CONNECTION_STRING = 'mongodb://127.0.0.1:27017';
const DATABASE_NAME = 'bookstore';
const LISTEN_PORT = 3001;
mongoose
    .connect(`${CONNECTION_STRING}/${DATABASE_NAME}`)
    .then(() => app.listen(LISTEN_PORT))
    .then(() => console.log('Connection to DB...'))
    .catch((error) => console.log('error with conn to DB: ', error));

process.on('SIGINT', async() => {
    await mongoose.disconnect();
    console.log('Application ended work.');
    process.exit();
});

// app.get('/api/users', async (req, res) => {
//     console.log('Пришел запрос от бразуера')
//     // получаем всех пользователей
//     const users = await User.find({});
//     res.send(users);
// });

// app.get('/api/users/:id', async(req, res) => {
//     const id = req.params.id;
//     // получаем одного пользователя по id
//     const user = await User.findById(id);
//     if(user) res.send(user);
//     else res.sendStatus(404);
// });
     
// app.post('/api/users', jsonParser, async (req, res) => {
//     if(!req.body) return res.sendStatus(400); 
//     // const firstName = req.body.name;
//     // const lastName = req.body.name;
//     // const age = req.body.age;
//     const firstName = 'Vasya';
//     const lastName = 'Pupkin';
//     const age = 20;
//     const user = new User({firstName: firstName, lastName: lastName, age: age});
//     // сохраняем в бд
//     await user.save();
//     res.send({msg: 'New user will be created!'});
// });
      
// app.delete('/api/users/:id', async(req, res) => {
//     const id = req.params.id;
//     // удаляем по id 
//     const user = await User.findByIdAndDelete(id);
//     if(user) res.send(user);
//     else res.sendStatus(404);
// });
     
// app.put('/api/users', jsonParser, async (req, res) => {   
//     if(!req.body) return res.sendStatus(400);
//     const id = req.body.id;
//     const userName = req.body.name;
//     const userAge = req.body.age;
//     const newUser = {age: userAge, name: userName};
//      // обновляем данные пользователя по id
//     const user = await User.findOneAndUpdate({_id: id}, newUser, {new: true}); 
//     if(user) res.send(user);
//     else res.sendStatus(404);
// });
