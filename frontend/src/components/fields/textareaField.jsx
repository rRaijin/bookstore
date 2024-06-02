import React from 'react';

const TextareaField = ({
    className,
    initialValue,
    fieldName,
    changeBookHandler,
    rows = 3
}) => {
    const handleChange = (event) => {
        const { value } = event.target;
        changeBookHandler(fieldName, value);
    };

    return (
      <textarea
          className={className}
          value={initialValue}
          onChange={handleChange}
          rows={rows}/>
    );
};

export default TextareaField;
