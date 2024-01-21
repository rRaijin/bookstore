import { useState, useEffect, Fragment } from 'react';


const Input = (props) => {
    const {
        initialValue, className, fieldName, changeBookHandler, 
        inputType = 'text', minValue = 0, maxValue = 10000
    } = props; // распаковываем свойства
    const [value, setValue] = useState(initialValue);
    // console.log('init: ', maxValue);

    useEffect(() => {
        if (value !== initialValue) {
            setValue(initialValue);
        }
    }, [initialValue]);
    
    const onInputChange = (e) => {
        setValue(e.target.value);
        changeBookHandler(fieldName, e.target.value);
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

        // <Fragment>
        //     {
        //         inputType === 'text' ?
        //         <input
        //             type={inputType}
        //             className={className}
        //             value={value}
        //             onChange={onInputChange}/> :
        //         <input
        //             type={inputType}
        //             min={minValue}
        //             max={maxValue}
        //             className={className}
        //             value={value}
        //             onChange={onInputChange}/>
        //     }
        // </Fragment>
    )
}

export default Input;
