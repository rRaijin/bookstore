import { useState } from 'react';

import Select from './elements/Select';
import InputGeneral from './fields/InputGeneral';
import TextareaField from './fields/TextareaField';
import Captcha from './fields/Captcha';


const SampleForm = (props) => {
    const {  } = props;

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [category, setCategory] = useState({});
    const [allowed, setAllowedStatus] = useState(false);
    const [captchavisible, changeStatus] = useState(false);

    // после заполнения всех полей при нажатии на отправку візвать капчу, 
    // если капча пройдена віполнить отправку на сервер, капчу скріть

    // сделать капчу в двух режимах: 1й как сейчас, 2й - "HARD MODE"

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('form submitted DATA: ', title, description, category);
        changeStatus(true);
        // if (allowed) {
        //     const data = {
        //         title,
        //         description,
        //         cat: category.id
        //     };
        // console.log(data)
        //     // send to server
        // } else {

        // }
    }

    return (
        <form onSubmit={handleSubmit}>
            <Select
                items={
                    [
                        {id: 1, name: 'bread'},
                        {id: 2, name: 'milk'},
                        {id: 3, name: 'apple'},
                        {id: 4, name: 'cheese'},
                        {id: 5, name: 'meet'}
                    ]
                }
                propToView='name'
                initialId={2}
                upToParent={setCategory}/>

            <InputGeneral
                inputType='text'
                value={title}
                onChangeHandle={e => setTitle(e.target.value)}
                className={''}/>
            <InputGeneral
                inputType='text'
                value={description}
                onChangeHandle={e => setDescription(e.target.value)}
                className={''}/>
            <TextareaField
                className=''
                initialValue='Some text'
                fieldName='description'
                onChangeHandler={() => console.log('change')}/>
            {
                captchavisible &&
                <Captcha/>
            }
            <button type='submit'>
                Калькуляция
            </button>
        </form>
    )
}

export default SampleForm;
