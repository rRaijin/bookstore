import { useState } from 'react';
import Select from './elements/Select';
import InputGeneral from './fields/InputGeneral';
import TextareaField from './fields/TextareaField';
import Captcha from './fields/Captcha';

const SampleForm = (props) => {
    const { } = props;

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [category, setCategory] = useState({});
    const [allowed, setAllowedStatus] = useState(false);
    const [captchavisible, changeStatus] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        changeStatus(true);
    };

    const handleCaptchaComplete = (status) => {
        if (status) {
            const data = {
                title,
                description,
                cat: category.id
            };
            console.log('Captcha passed, form data: ', data);
            changeStatus(false); // прячу капчу после ее прохождения
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <Select
                items={[
                    { id: 1, name: 'bread' },
                    { id: 2, name: 'milk' },
                    { id: 3, name: 'apple' },
                    { id: 4, name: 'cheese' },
                    { id: 5, name: 'meat' }
                ]}
                propToView='name'
                initialId={2}
                upToParent={setCategory}
            />

            <InputGeneral
                inputType='text'
                value={title}
                onChangeHandle={e => setTitle(e.target.value)}
                className={''}
            />
            <InputGeneral
                inputType='text'
                value={description}
                onChangeHandle={e => setDescription(e.target.value)}
                className={''}
            />
            <TextareaField
                className=''
                initialValue='Some text'
                fieldName='description'
                onChangeHandler={() => console.log('change')}
            />
            {
                captchavisible &&
                <Captcha onCaptchaComplete={handleCaptchaComplete} />
            }
            {
                !captchavisible && !allowed && (
                    <button type='submit'>
                        Калькуляция
                    </button>
                )
            }
        </form>
    );
};

export default SampleForm;
