import { useState, useEffect, Fragment } from 'react';


const Input = (props) => {
    const {
        initialValue, className, fieldName, onChangeHandler, 
        inputType = 'text', minValue = 0, maxValue = 10000
    } = props; // распаковываем свойства
    const [value, setValue] = useState(initialValue);

    useEffect(() => {
        if (value !== initialValue) {
            setValue(initialValue);
        }
    }, [initialValue]);
    
    const onInputChange = (e) => {
        setValue(e.target.value);
        onChangeHandler(fieldName, e.target.value);
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
        <input {...inputAttrs}/>
    )
}

export default Input;
