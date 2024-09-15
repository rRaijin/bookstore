import { useState, useEffect } from 'react';


const Input = (props) => {
    const {
        initialValue, className, fieldName, onChangeHandler, 
        inputType = 'text', minValue = 0, maxValue = 10000
    } = props; // распаковываем свойства
    const [value, setValue] = useState(initialValue);
    // console.log(props);

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

    // const onCheckboxChange = (option) => {
    //     const updatedValues = value.includes(option)
    //         ? value.filter(val => val !== option)
    //         : [...value, option];
    //     setValue(updatedValues);
    //     onChangeHandler(fieldName, updatedValues);
    // }

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
            <label className='bold'>
                {fieldName}: 
            </label>
            {/* {inputType === 'checkbox' ? (
                options.length > 0 ? (
                    options.map((option, index) => (
                        <div key={index}>
                            <input
                                type='checkbox'
                                checked={value.includes(option)}
                                onChange={() => onCheckboxChange(option)}
                            />
                            <label className=''>{option}</label>
                        </div>
                    ))
                ) : (
                    <p></p>
                )
            ) : (
            )} */}
            <input {...inputAttrs}/>
        </div>
    )
}

export default Input;
