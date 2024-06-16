import React, { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

const BookForm = ({ upDataToParent, initialBookName, initialDescription, initialYear }) => {
    const [bookName, updateBookName] = useState(initialBookName);
    const [description, updateDescription] = useState(initialDescription);
    const [year, updateYear] = useState(initialYear);

    const submitForm = (event) => {
        event.preventDefault();
        console.log('state: ', bookName, description, year);
        // fetch('http://localhost:3001/api/books', {
        //     method: 'PUT',
        //     headers: {
        //         'Accept': 'application/json',
        //         'Content-Type': 'application/json'
        //     },
        //     body: JSON.stringify({
        //         bookName: bookName,
        //         description,
        //         year
        //     })
        // })
        // .then(async (response) => {
        //     if (response.ok === true) {
        //         const results = await response.json();
        //         // console.log('Response when add book: ', results.item);
        //         upDataToParent(results.item);
        //     }
        // })
    }

    return (
        <form action="" onSubmit={submitForm}>
            <TextField
                id="standard-basic"
                label="bookName"
                variant="standard"
                value={bookName}
                onChange={(e) => updateBookName(e.target.value)}
            />

            <TextField
                id="standard-basic"
                label="description"
                variant="standard"
                value={description}
                onChange={(e) => updateDescription(e.target.value)}
            />

            <TextField
                id="standard-basic"
                label="year"
                variant="standard"
                value={year}
                onChange={(e) => updateYear(e.target.value)}
            />

            <Button variant="contained" type="submit">
                Submit
            </Button>
        </form>
    );
}

export default BookForm;
