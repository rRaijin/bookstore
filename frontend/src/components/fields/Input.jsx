import { useState, useEffect } from 'react';


const Input = (props) => {
    const { initialValue, className, fieldName, changeBookHandler } = props; // распаковываем свойства
    const [value, setValue] = useState(initialValue);
    // console.log('init: ', initialValue);

    useEffect(() => {
        if (value !== initialValue) {
            setValue(initialValue);
        }
    }, [initialValue]);
    
    const onInputChange = (e) => {
        setValue(e.target.value);
        changeBookHandler(fieldName, e.target.value);
    };

    return (
        <input
            type='text'
            className={className}
            value={value}
            onChange={onInputChange}/>
    )
}

export default Input;
