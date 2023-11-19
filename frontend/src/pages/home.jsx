import React, { useState, useEffect } from 'react';

import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';


const HomePage = () => {
    const [bookName, updateBookName] = useState('');
    const [description, updateDescription] = useState('');
    const [year, updateYear] = useState(null);

    const submitForm = (event) => {
        event.preventDefault();
        console.log('state: ', bookName, description, year);
        fetch('http://localhost:3001/api/books', {
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                bookName: bookName,
                description,
                year
            })
        });
    }


    return (
        <div className=''>
            <div className=''>
                <h1 className=''></h1>
                Ставим яркий заголовок - у нас всегда новинки, программы лояльности и тд, картинку, контакты
                Минимум информации в блоке
            </div>

            <div className=''>
                Slider block
                Первым слайдом необходимо пользователя завлечь - предложить купон(как его получить), какая-нибудь программа лояльности, баллы иди др.
                В слайд ставим по одной книги из каждого раздела ниже + информацию про книжный клуб + 1 анонс мероприятия
            </div>

            <div className=''>
                <h2>
                    Новинки
                </h2>
                <form action="" onSubmit={submitForm}>
                    <TextField
                        id="standard-basic"
                        label="bookName"
                        variant="standard"
                        value={bookName}
                        onChange={(e) => updateBookName(e.target.value)}/>

                    <TextField
                        id="standard-basic"
                        label="description"
                        variant="standard"
                        value={description}
                        onChange={(e) => updateDescription(e.target.value)}/>

                    <TextField
                        id="standard-basic"
                        label="year"
                        variant="standard"
                        value={year}
                        onChange={(e) => updateYear(e.target.value)}/>

                    <Button variant="contained" type="submit">
                        Submit
                    </Button>
                </form>


            </div>
            <div className=''>
                <h2>
                    Топ
                </h2>
            </div>

            {/* special block */}
            <div className=''>
                <h2>
                    Біографії
                </h2>
            </div>

            <div className=''>
                <h2>
                    Ексклюзив
                </h2>
            </div>
            <div className=''>
                <h2>
                    Шкільна література
                </h2>
            </div>

            {/* special block */}
            <div className=''>
                <h2>
                    Книжковий клуб
                </h2>
            </div>

            <div className=''>
                <h2>
                    Психологія
                </h2>
            </div>

            {/* special block */}
            <div className=''>
                <h2>
                    Автори
                </h2>
            </div>
        </div>
    );
};

export default HomePage;
