import React, { useState, useEffect } from 'react';

const TextareaField = ({
    className,
    initialValue,
    fieldName,
    onChangeHandler,
    rows = 3
}) => {
    const [value, setValue] = useState('');

    useEffect(() => {
        if (value !== initialValue) {
            setValue(initialValue);
        }
    }, [initialValue]);

    const handleChange = (event) => {
        const { value } = event.target;
        setValue(value);
        onChangeHandler(fieldName, value);
    };

    return (
        <div className='flex'>
            <div className='bold'>
                {fieldName}:
            </div>
            <textarea
            className={className}
            value={value}
            onChange={handleChange}
            rows={rows}/>
            
        </div>
        
        
    );
};

export default TextareaField;
