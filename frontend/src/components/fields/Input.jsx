import { useState, useEffect, Fragment } from 'react';


const Input = (props) => {
    const {
        initialValue, className, fieldName, onChangeHandler, 
        inputType = 'text', minValue = 0, maxValue = 10000
    } = props; // распаковываем свойства
    const [value, setValue] = useState(initialValue);
    console.log(props)

    useEffect(() => {
        if (value !== initialValue) {
            setValue(initialValue);
        }
    }, [initialValue]);
    
    const onInputChange = (e) => {
        const newValue = inputType === 'number' ? Number(e.target.value) : e.target.value;
        setValue(newValue);
        onChangeHandler(fieldName, newValue);
    };

    const inputAttrs = {
        type: inputType,
        className: className,
        value: value,
        onChange: onInputChange
    };

    if (inputType === 'number') {
        inputAttrs['min'] = minValue;
        inputAttrs['max'] = maxValue;
    }

    return (
        <div className=''>
            <label>{fieldName}</label>
            <input {...inputAttrs}/>
        </div>
    )
}

export default Input;
